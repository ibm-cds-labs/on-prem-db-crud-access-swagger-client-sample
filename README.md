# Simple on-premises data source REST-API sample application
================================================================================

TODO

## Deploy to IBM Bluemix

To manually deploy this application to Bluemix:

    $ git clone https://github.com/ibm-cds-labs/on-prem-db-crud-access-using-swagger-client-sample.git

    $ cd on-prem-db-crud-access-using-swagger-client-sample

    $ mkdir swaggerjson
    
    $ cp /path/to/downloaded/swaggerJSON.json swaggerjson/swaggerJSON_employee.json

    $ cf push

**Note:** You may notice that Bluemix assigns a URL to your application containing a random word. This is defined in the `manifest.yml` file where the `random-route` key set to the value of `true`. This ensures that multiple people deploying this application to Bluemix do not run into naming collisions. To specify your own route, remove the `random-route` line from the `manifest.yml` file and add a `host` key with the unique value you would like to use for the host name.

### Binding the sample REST API

The REST APIs are typically exposed to Bluemix applications using user-provided services, as described in the tutorial.

#### Binding the published sample REST API using the Bluemix web console
  * [Log in to Bluemix](https://console.ng.bluemix.net/).
  * Open the *DASHBOARD* and navigate to the space where you've deployed the application.
  * Double-click on the **on-prem-db-crud-access-using-swagger-client-sample** application tile.
  * Click **BIND A SERVICE OR API**.
  * Select the **employeeTableAPI** service instance and follow the prompts.

#### Binding the published sample REST API using the Cloud Foundry CLI

To bind the sample REST API to the application run the following commands:

    $ cf bind-service on-prem-db-crud-access-using-swagger-client-sample employeeTableAPI

    $ cf restage on-prem-db-crud-access-using-swagger-client-sample


### Privacy Notice

This web application includes code to track deployments to [IBM Bluemix](https://www.bluemix.net/) and other Cloud Foundry platforms. The following information is sent to a [Deployment Tracker](https://github.com/cloudant-labs/deployment-tracker) service on each deployment:

* Application Name (`application_name`)
* Space ID (`space_id`)
* Application Version (`application_version`)
* Application URIs (`application_uris`)

This data is collected from the `VCAP_APPLICATION` environment variable in IBM Bluemix and other Cloud Foundry platforms. This data is used by IBM to track metrics around deployments of sample applications to IBM Bluemix to measure the usefulness of our examples, so that we can continuously improve the content we offer to you. Only deployments of sample applications that include code to ping the Deployment Tracker service will be tracked.

#### Disabling Deployment Tracking

TODO

### License

Licensed under the [Apache License, Version 2.0](https://github.com/ibm-cds-labs/on-prem-connectivity-test-java-sample/blob/master/LICENSE).
