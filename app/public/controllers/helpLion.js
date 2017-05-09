app.controller('helpLionCtrl',function ($scope,$state,$rootScope,progressService) {
  console.log("entered lionIntro controller...");
  // $scope.mascotImg="  assests/images/lionHead.png";
    $("#myProgress,#myBar,#lionHead,#kidName").show();
$rootScope.progress= progressService.helpLion;

// console.log($scope.progress);
  // $scope.next=function () {
  //   $state.go('lionIntro1');
  // };
  // $scope.previous=function () {
  //   $state.go('junglepage1');
  // };
});
