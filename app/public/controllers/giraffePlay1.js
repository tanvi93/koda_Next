app.controller('giraffePlay1Ctrl',function ($rootScope,progressBarForGiff) {
  $("#myProgress,#myBar").show();
  $rootScope.progress= progressBarForGiff.giffGame;
});
