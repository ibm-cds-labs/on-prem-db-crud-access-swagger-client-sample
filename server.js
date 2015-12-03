/*-------------------------------------------------------------------------------
 Copyright IBM Corp. 2015
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-------------------------------------------------------------------------------*/

'use strict';

var express = require('express'),
    app = express();

var client = require('swagger-client');
var myjson=require('./swaggerjson/swaggerJSON_employee.json');    

var appEnv = require('cfenv').getAppEnv();

app.use(express.static(__dirname + '/public'));

// fetch employee information by ID
app.get('/employee', function (req, res) {

	var apiName = 'employeeTableAPI';

	// load the credentials for the API service 
	var cacServiceCreds = appEnv.getServiceCreds( new RegExp(apiName, 'i') );
	if (! cacServiceCreds || ! cacServiceCreds.secret_header_value) {
		// the API for the employee table is not bound to this app; err
		res.status(500).send('<p>The ' + apiName + ' service is not bound to this application.</p>');
	}
	else if(! req.query.employeeID) {
		// no employee ID was specified; err
		res.status(400).send('<p>You must provide an employee ID.</p>');
	} 
	else {

		// create new Swagger client
		var swagger = new client();

		// initialize client 
		swagger.initialize({
				spec: myjson,
				agent: false,
				success: function() {
					// fetch employee with the specified ID, providing the API key
	    			swagger.EMPLOYEE.findEMPLOYEEById({'X-IBM-CloudInt-ApiKey':cacServiceCreds.secret_header_value,'EMPNO': req.query.employeeID},
	    				                              {responseContentType: 'application/json'}, 
	    				                              function(apiResponse) {
	    				                               	// return the employee information as JSON
	    												res.json(apiResponse.obj);
	    											  }, 
	    											  function(error) {	
														// return the returned status and message													
	    												res.status(error.obj.error.status).send('<p>' + error.obj.error.message + '</p>');
													});
	    		}
		});
	}

});

app.listen(appEnv.port);

