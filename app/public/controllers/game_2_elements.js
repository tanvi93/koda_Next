app.controller('game2elementsCtrl', function($scope,$state) {
$('.disabled').prop('disabled',true);
  $('#display,#back_button,#next_button').css('filter','blur(5px)');
setTimeout(function(){
  $('#display,#back_button,#next_button').css('filter','blur(0px)')
},2500)

$scope.moveCap = function() {
      $scope.isCap = true;
        $('#cap').css("opacity", "0.5");
        $('#capPlaced').show();
         $scope.moveApple = function() {
          $scope.isApple = true;
            $('#apple').css("opacity", "0.5");
            $('#applePlaced').show();
             $scope.moveMonkey = function() {
              $scope.isMonkey = true;
                $('#monkey').css("opacity", "0.5");
                $('.cap').hide();
                $('#monkeyPlaced').show();
                 $scope.moveBg = function() {
                  $scope.isBg = true;
                    $('.chat_monkey').hide();
                    $('#bgPlaced').show();
                }
            }
        }
    }

    $scope.scoringRule = function() {
        $scope.isScoringRule = true;
        $('.chat_bg').hide();
        $('#scoringRule').css("opacity", "0.5");
        $scope.gameOverRule = function() {
            $scope.isgameOverRule = true;
              $state.go('game2elementsNext');
                $('.disabled').removeClass('disabled');
        }
    }

setTimeout(function(){
  $('.chat').show();

},1500)

})
