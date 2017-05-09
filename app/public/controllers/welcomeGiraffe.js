app.controller('welcomeGiraffeCtrl',function($rootScope,progressBarForGiff) {

$rootScope.progress= progressBarForGiff.welcome;
    $("#myProgress,#myBar,#giffHead").show();
$('#lionHead').hide();
});
