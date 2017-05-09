app.controller('giraffeGameIntroCtrl',function($scope,$rootScope,progressBarForGiff){
  $("#myProgress,#myBar").show();
  $rootScope.progress= progressBarForGiff.welcome;
   $scope.isclicked = false;
});
