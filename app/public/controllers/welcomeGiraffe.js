app.controller('welcomeGiraffeCtrl',function ($rootScope,progressBarForGiff) {
  $("#myProgress,#myBar").show();
$rootScope.progress= progressBarForGiff.welcome;
});
