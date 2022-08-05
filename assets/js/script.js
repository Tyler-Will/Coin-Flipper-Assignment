document.addEventListener('DOMContentLoaded', function () {

// TODO: Declare any global variables we need
let head_tot = 0;
let tail_tot = 0;
let head_percent= head_tot/tail_tot * 100;
let tail_percent = tail_tot/head_tot * 100;

document.getElementById("Coinflip").onclick = function(){
   
    x = Math.floor(Math.random() *2);
    if (x < 1){
        document.getElementById("heads").innerHTML= head_tot
        head_tot = head_tot+1
        document.getElementById("heads-percent").innerHTML = head_tot/tail_tot * 100
        document.getElementById("tails-percent").innerHTML = tail_tot/head_tot * 100
        
    }
    else{
        document.getElementById("tails").innerHTML= tail_tot
       tail_tot = tail_tot+1
       document.getElementById("heads-percent").innerHTML = head_tot/tail_tot * 100
      document.getElementById("tails-percent").innerHTML = tail_tot/head_tot * 100
    
    
}
}
document.getElementById("Clearscore").onclick = function(){
    //if (head_tot > 0)
    document.getElementById("heads").innerHTML= 0
    document.getElementById("heads-percent").innerHTML = 0
    head_tot =0
    //if (tail_tot > 0)
    document.getElementById("tails").innerHTML= 0
    document.getElementById("tails-percent").innerHTML = 0
    tail_tot =0 
}
//document.getElementById("heads-percent").innerHTML = head_percent
//document.getElementById("tails-percent").innerHTML = tail_percent
    // TODO: Add event listener and handler for flip and clear buttons
// Flip Button Click Handler

        // TODO: Determine flip outcome
        
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)


})
