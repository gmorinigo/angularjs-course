(function(){
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);
  
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.lunchMenu = "";
    $scope.message = "";
    $scope.checkIfTooMuch = function(){
      console.log($scope.lunchMenu);
      $scope.lunchMenu=="" ? $scope.message = "Please enter data first" 
                           : $scope.message = checkMenu($scope.lunchMenu);
      
    };

  function checkMenu(lunchMenu){	
      var menuItems = lunchMenu.split(';');
      console.log(menuItems.length);
      switch (menuItems.length) {
        case 1:
        case 2:
        case 3:
          return "Enjoy!";
        default:
          return "Too much!";
      }
    };
  }
})();