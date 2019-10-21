 let computerNumber = (Math.floor(Math.random() * (120 - 19 + 1) + 19));
 let crystal1_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
 let crystal2_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
 let crystal3_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
 let crystal4_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));

 

 $("#number-to-match").text(computerNumber);
 matchingNumber = 0;
 $("#user-number").text(matchingNumber);
 winCount = 0;
 loseCount = 0;
 $("#win").text(winCount);
 $("#lose").text(loseCount);

$(".crystal").mouseup(function(){
  if (matchingNumber === computerNumber) {
    winCount++;
    $("#win").text(winCount);
     computerNumber = (Math.floor(Math.random() * (120 - 19 + 1) + 19));
     $("#number-to-match").text(computerNumber);
     crystal1_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
     crystal2_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
     crystal3_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
     crystal4_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
     matchingNumber = 0;
     $("#user-number").text(matchingNumber);
 }

 if (matchingNumber > computerNumber) {
   loseCount++
   $("#lose").text(loseCount);
   computerNumber = (Math.floor(Math.random() * (120 - 19 + 1) + 19));
   $("#number-to-match").text(computerNumber);
   crystal1_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
   crystal2_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
   crystal3_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
   crystal4_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
   matchingNumber = 0;
   $("#user-number").text(matchingNumber);
}
});

 $("#crystal1").mousedown("click", function(){
    matchingNumber = crystal1_Number + matchingNumber;
    $("#user-number").text(matchingNumber);
  })
  $("#crystal2").mousedown("click", function(){
    matchingNumber = crystal2_Number + matchingNumber;
    $("#user-number").text(matchingNumber);
  })
  $("#crystal3").mousedown("click", function(){
    matchingNumber = crystal3_Number + matchingNumber;
    $("#user-number").text(matchingNumber);
  })
  $("#crystal4").mousedown("click", function(){
    matchingNumber = crystal4_Number + matchingNumber;
    $("#user-number").text(matchingNumber);
  })

  $( "#crystal1,#crystal2,#crystal3,#crystal4" ).mousedown(function() {
    $(this).css("border", "1.5px solid rgb(126, 51, 248)"); 
    $(this).css("box-shadow: 0 0 10px", "rgb(75, 15, 170)");
  });

  $( "#crystal1,#crystal2,#crystal3,#crystal4" ).mouseup(function() {
    $(this).css("border", "1px solid white");
  });

 


