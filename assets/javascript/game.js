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
 winCountSpan = document.getElementById("win");
 winCountSpan.textContent = winCount;
 loseCountSpan = document.getElementById("lose");
 loseCountSpan.textContent = loseCount;



 $("#crystal1").on("click", function(){
    matchingNumber = crystal1_Number + matchingNumber;
    if (matchingNumber === computerNumber) {
        winCount++;
        winCountSpan.textContent = winCount;
         computerNumber = (Math.floor(Math.random() * (120 - 19 + 1) + 19));
         computerNumberDiv.textContent = computerNumber;
         crystal1_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
         crystal2_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
         crystal3_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
         crystal4_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
         matchingNumber = 0;
         userNumberDiv.textContent = matchingNumber;
     }
   
     if (matchingNumber > computerNumber) {
       loseCount++
       loseCountSpan.textContent = loseCount;
       computerNumber = (Math.floor(Math.random() * (120 - 19 + 1) + 19));
       computerNumberDiv.textContent = computerNumber;
       crystal1_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
       crystal2_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
       crystal3_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
       crystal4_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
       matchingNumber = 0;
       userNumberDiv.textContent = matchingNumber;
   }
    userNumberDiv.textContent = matchingNumber;
  })
  $("#crystal2").on("click", function(){
    matchingNumber = crystal2_Number + matchingNumber;
    if (matchingNumber === computerNumber) {
        winCount++;
        winCountSpan.textContent = winCount;
         computerNumber = (Math.floor(Math.random() * (120 - 19 + 1) + 19));
         computerNumberDiv.textContent = computerNumber;
         crystal1_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
         crystal2_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
         crystal3_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
         crystal4_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
         matchingNumber = 0;
         userNumberDiv.textContent = matchingNumber;
     }
   
     if (matchingNumber > computerNumber) {
       loseCount++;
       loseCountSpan.textContent = loseCount;
       computerNumber = (Math.floor(Math.random() * (120 - 19 + 1) + 19));
       computerNumberDiv.textContent = computerNumber;
       crystal1_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
       crystal2_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
       crystal3_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
       crystal4_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
       matchingNumber = 0;
       userNumberDiv.textContent = matchingNumber;
   }
    userNumberDiv.textContent = matchingNumber;
  })
  $("#crystal3").on("click", function(){
    matchingNumber = crystal3_Number + matchingNumber;
    if (matchingNumber === computerNumber) {
        winCount++;
        winCountSpan.textContent = winCount;
         computerNumber = (Math.floor(Math.random() * (120 - 19 + 1) + 19));
         computerNumberDiv.textContent = computerNumber;
         crystal1_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
         crystal2_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
         crystal3_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
         crystal4_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
         matchingNumber = 0;
         userNumberDiv.textContent = matchingNumber;
     }
   
     if (matchingNumber > computerNumber) {
       loseCount++;
       loseCountSpan.textContent = loseCount;
       computerNumber = (Math.floor(Math.random() * (120 - 19 + 1) + 19));
       computerNumberDiv.textContent = computerNumber;
       crystal1_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
       crystal2_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
       crystal3_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
       crystal4_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
       matchingNumber = 0;
       userNumberDiv.textContent = matchingNumber;
   }
    userNumberDiv.textContent = matchingNumber;
  })
  $("#crystal4").on("click", function(){
    matchingNumber = crystal4_Number + matchingNumber;
    if (matchingNumber === computerNumber) {
        winCount++;
        winCountSpan.textContent = winCount;
         computerNumber = (Math.floor(Math.random() * (120 - 19 + 1) + 19));
         computerNumberDiv.textContent = computerNumber;
         crystal1_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
         crystal2_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
         crystal3_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
         crystal4_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
         matchingNumber = 0;
         userNumberDiv.textContent = matchingNumber;
     }
   
     if (matchingNumber > computerNumber) {
       loseCount++;
       loseCountSpan.textContent = loseCount;
       computerNumber = (Math.floor(Math.random() * (120 - 19 + 1) + 19));
       computerNumberDiv.textContent = computerNumber;
       crystal1_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
       crystal2_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
       crystal3_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
       crystal4_Number = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
       matchingNumber = 0;
       userNumberDiv.textContent = matchingNumber;
   }
    userNumberDiv.textContent = matchingNumber;
  })



});