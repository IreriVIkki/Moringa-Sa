var resultsList = document.createElement('addItem');
var liItem = document.createElement('li');
$(document).ready(function(){
  $('#submitButton').on('click', function(e){
    e.preventDefault();
    $('ul').empty();
    var playerInput = parseFloat(document.getElementById('playerIn').value);
    if(isNaN(playerInput)){
      alert('You Must Enter A Number');
    }else{
      for (var i = playerInput; i >= 1; i--) {
        if((i%3) == 0 && i%15 !== 0){
          $('ul').append('<li class="items" id="ping">Ping</li>');
          if(i == playerInput){
            $('#result').text('Ping');
            $('result').css('backgroundColor', 'aqua');
          }
        }else if((i%5) == 0 && i%15 !== 0){
          $('ul').append('<li class="items" id="pong">Pong</li>');
          if(i == playerInput){
            $('#result').text('Pong');
            $('result').css('backgroundColor', 'lightgreen');
          }
        }else if((i%15) == 0){
          $('ul').append('<li class="items" id="pingPong">Ping_Pong</li>');
          if(i == playerInput){
            $('#result').text('Ping_Pong');
            $('result').css('backgroundColor', 'green');
          }
        }else if((i%3) !== 0 && (i%5) !== 0 && (i%15) !== 0){
          $('ul').append('<li class="items" id="fail">Fail</li>');
          if(i == playerInput){
            $('#result').text('Fail');
            $('result').css('backgroundColor', 'coral');
          }
        }
      }
    }
  });
});
