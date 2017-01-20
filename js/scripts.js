// Back-end Logic//

var pingPongGame = function(number) {
  var game = [];
  for (i = 1; i <= number; i ++){
  if ( i % 15 === 0 && i !== 0) {
    game.push("ping-pong");
  } else if (i % 3 === 0 && i % 15 !== 0) {
    game.push("ping");
  } else (i % 5 && i !== 0){
  game.push("pong");
    }
  };
return game;
};


// Front-end Logic //
$(document).ready(function(event){
  event.preventDefault();
  alert("backend is ready");
});
