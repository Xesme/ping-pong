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


// Front-end Logic //
// $(document).ready(function(event) {
//   event.preventDefault();
//   alert("backend is ready");
// });
