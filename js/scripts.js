// Back-end Logic//

 var game = function(number){
   var pingPongGame = [];
   for (i = 1; i <= number; i ++){
     if (i % 3 === 0 && i % 5 !== 0){
       pingPongGame.push("ping!");
     } else if (i % 5 === 0 && i & 3 !== 0){
       pingPongGame.push("pong!");
     } else if (i % 15 === 0 && i !== 0){
       pingPongGame.push("ping-pong!");
     }
     else {
       pingPongGame.push(i);
     }
   };
    return pingPongGame;
 };
 alert("backend is ready");


// Front-end Logic //
$(document).ready(function() {
  alert("front-end has started");
  $("#text-box").submit(function(event){
    event.preventDefualt();
    alert("submit function has started");
  });
});
