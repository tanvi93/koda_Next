app.controller('giraffeIntroCtrl',function ($rootScope,progressBarForGiff) {
  $(document).ready(function(){
    $("#myProgress,#myBar").show();
    $rootScope.progress= progressBarForGiff.welcome;
    setTimeout(function(){
      $('#giraffe-intro-chat').fadeIn(500);
    }, 2000);
})

});
