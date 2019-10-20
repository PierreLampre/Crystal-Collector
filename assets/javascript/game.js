$(document).ready(function() {


 let computerNumber = (Math.floor(Math.random() * (120 - 19 + 1) + 19));
 let crystal1_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
 let crystal2_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
 let crystal3_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
 let crystal4_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
 
 computerNumberDiv = document.getElementById("number-to-match");
 computerNumberDiv.textContent = computerNumber;
 matchingNumber = 0;
 userNumberDiv = document.getElementById("user-number");
 userNumberDiv.textContent = matchingNumber;
 winCount = 0;
 loseCount = 0;


 $("#crystal1").on("click", function(){
    matchingNumber = crystal1_Number + matchingNumber;
    userNumberDiv.textContent = matchingNumber;
  })
  $("#crystal2").on("click", function(){
    matchingNumber = crystal2_Number + matchingNumber;
    userNumberDiv.textContent = matchingNumber;
  })
  $("#crystal3").on("click", function(){
    matchingNumber = crystal3_Number + matchingNumber;
    userNumberDiv.textContent = matchingNumber;
  })
  $("#crystal4").on("click", function(){
    matchingNumber = crystal4_Number + matchingNumber; 
    userNumberDiv.textContent = matchingNumber;
  })



});