// Back-end Logic//

 var game = function(numberInput){
   var pingPongGame = [];
   for (i = 1; i <= numberInput; i ++){
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
 // alert("backend is ready");


// Front-end Logic //
$(document).ready(function() {
  $("#text-box").submit(function(event) {
     event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var results = game(userInput);
    results.forEach(function(result){
      $("#userOutput").append("<li>" + result + "</li>");
      console.log(result);
      // alert("submit function has ended");
    });
  });
});
