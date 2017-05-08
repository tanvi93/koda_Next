app.controller('typesOfCharp3Ctrl',function($scope,$rootScope,progressBarForGiff){
  $("#myProgress,#myBar").show();
  $rootScope.progress= progressBarForGiff.typesOfChar3;
$('.disabled').prop('disabled', true);

setTimeout(function(){
  $('.disabled').prop('disabled', false);
  $('.disabled').removeClass('disabled');
},4000)
});
