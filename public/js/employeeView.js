    angular.module('employeeApp', [])
      .controller('empViewCtrl', function($scope,$http) {

        console.log('Loading employee view controller');

        /* 
         * fetchEmployee
         */
        $scope.fetchEmployee = function()  {

          $scope.responseCode='';
          $scope.responseText='';

          $http.get('/employee?employeeID=' + $scope.employeeID).then(
            function(response) {
              console.log('fetch returned ' + JSON.stringify(response));
              $scope.responseCode = response.status;
              $scope.responseText = response.data;
            },
            function(response) {
              console.log('fetch returned ' + JSON.stringify(response));
              $scope.responseCode = response.status;
              $scope.responseText = response.data;
            });

        }; // function fetchEmployee

        
      });