app.controller('typesOfCharp2Ctrl',function($scope,$rootScope,progressBarForGiff){
  $("#myProgress,#myBar").show();
$rootScope.progress= progressBarForGiff.typesOfChar2;
$('.disabled').prop('disabled', true);

setTimeout(function(){
  $('.disabled').prop('disabled', false);
  $('.disabled').removeClass('disabled');
},6000)

});
