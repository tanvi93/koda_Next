app.controller('giraffePlayCtrl',function ($rootScope,progressBarForGiff) {
  $("#myProgress,#myBar").show();
$rootScope.progress= progressBarForGiff.playGame2;
});
