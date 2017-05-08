app.controller('giraffeIntro1Ctrl',function ($rootScope,progressBarForGiff) {
  $("#myProgress,#myBar").show();
  $rootScope.progress= progressBarForGiff.welcome;
});
