app.controller('junglepageCtrl',function ($scope,$state,$http,$rootScope) {
  console.log("entered junglepage controller...");
  var info;
  $scope.welcome = function(){
    console.log("inside submit function");

             info={
                Name:$scope.Name
            };
            console.log(info);
            if(info.Name == undefined){
                $('#inputError').show();
              setTimeout(function(){
                $('#inputError').hide();
              },1000)

            }else{
          $http({
            method:'POST',
            url:'http://localhost:3000/koda/login',
            data:info,
            headers:{'content-Type' : 'application/json'}
        }).then(function(success){
            console.log("login successful");
            window.localStorage['name'] = info.Name;
    $rootScope.Data = window.localStorage['name'];

    $scope.clicked =true;
    $('.previousChat,#input_container').hide();
    $('.nextChat,.button').show();
      }),function(error){
        console.log("err");
        };
        };
};

  $("#myProgress,#myBar").hide();
  $scope.clicked=function () {
    $scope.isClicked =true;
    setTimeout(function(){
      $('#input_container').show(1000);
    })
    // $state.go('junglepage1');
  };


});
