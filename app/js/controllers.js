'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneAuthCtrl', ['$scope', 'Account', '$location',
  function($scope, $location, Account) {
    $scope.accounts = Account.query();
    console.log($scope.accounts);
    if($.cookie('uniqueKey')=='123'){
      $location.path('/phones');
    }else{
      $scope.loginTrue = 'oyasi';
      $scope.passwordTrue = '123';
      $scope.auth = function() {
        if($scope.login===$scope.loginTrue){
          if($scope.password===$scope.passwordTrue){
            $.cookie('uniqueKey', '123');
            $location.path('/phones');
          }else{
            alert("Password is false");
          }
        }else{
          alert("Login is false");
        } 
      }
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

    $scope.setImage = function(imageUrl, index) {
      $scope.imgIndex = index;
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
