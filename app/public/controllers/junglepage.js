app.controller('junglepageCtrl',function ($scope,$state) {
  console.log("entered junglepage controller...");
  $("#myProgress,#myBar").hide();
  $scope.clicked=function () {
    // $state.go('junglepage1');
  };
});
