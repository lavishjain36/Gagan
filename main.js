//gnerate a random number 

var y=Math.floor(Math.random()* 100+1);

//no of time to judge or guess that exact number
var guess=1;


document.getElementById("submitguess").onclick =function() {

//user to enter a number
var x=document.getElementById("guessField").value;



if(x==y)
{
alert("Congratulation!! You have got the number " + guess + " Times");
}


else if(x>y)
{
guess++;
alert("Sorry!! Try a smaller number.");
}

else{
guess++;
alert("Sorry!! Try a larger number.");
}


}