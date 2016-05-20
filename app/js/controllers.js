'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneAuthCtrl', ['$scope', '$location',
  function($scope, $location) {
    $scope.auth = function() {
      $location.path('/phones');
    }
  }]);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams','$location', 'Phone',
  
  function($scope, $routeParams, $location, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
      $scope.imgIndex = 0;
      $scope.maxlenghtIndex = phone.images.length-1;
    });

    $scope.iconUrl = 'app/img/back.png';
    $scope.goBack = function(){
      $location.path('/phones');
    };

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
    $scope.focus = function(index) {
      if(index==0 && $scope.imgIndex>0){
        $scope.imgIndex -= 1;
        $scope.mainImageUrl = $scope.phone.images[$scope.imgIndex];
      }
      if(index==1 && $scope.imgIndex<6 && $scope.imgIndex!=$scope.maxlenghtIndex){
        $scope.imgIndex += 1;
        $scope.mainImageUrl = $scope.phone.images[$scope.imgIndex];
      }
    };
  }]);
