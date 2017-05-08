app.controller('junglepageCtrl',function ($scope,$state,$http,$rootScope) {
  console.log("entered junglepage controller...");
  var info;
  var Name = document.getElementById("Name");
Name.addEventListener("keydown", function (name) {
    if (name.keyCode === 13) {
        $scope.welcome(name);
    }
});

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
            console.log("from backend",success);
            // window.localStorage['name'] = info.Name;
console.log(success.data.data.Name);
var name =success.data.data.Name;
var firstName = name.slice(0, name.indexOf(" "));
console.log("name",firstName);
    //         window.localStorage['name'] = success.data.data.Name;
    // $rootScope.Data = window.localStorage['name'];

var nameLength =  firstName.length;
console.log(nameLength);
if(nameLength > 20) {
        $('.textHome').css('font-size', '23px');
            window.localStorage['name']=firstName;
            $rootScope.Data = window.localStorage['name'];
    } else if(nameLength > 10) {
      console.log("size greater than 10");
        $('.textHome').css('font-size', '25px');
        window.localStorage['name']=firstName;
        $rootScope.Data = window.localStorage['name'];
    } else if(nameLength > 5) {
        $('.textHome').css('font-size', '27px');
        console.log("size perfect");
        window.localStorage['name']=firstName;
        $rootScope.Data = window.localStorage['name'];
    }else if(nameLength <= 5) {
        $('.textHome').css('font-size', '30px');
        console.log("size perfect");
        window.localStorage['name']=firstName;
        $rootScope.Data = window.localStorage['name'];
    }
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
