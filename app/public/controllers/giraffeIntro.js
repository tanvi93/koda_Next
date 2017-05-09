app.controller('giraffeIntroCtrl',function ($rootScope,progressBarForGiff) {
  $("#myProgress,#myBar").show();
  $rootScope.progress= progressBarForGiff.welcome;
  $(document).ready(function(){

    setTimeout(function(){
      $('#giraffe-intro-chat').fadeIn(500);
    }, 2000);
});

});
