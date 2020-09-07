let i;

// create variables to hold class name and write in them
let red = document.getElementsByClassName("red");
let blue = document.getElementsByClassName("blue");
let orangered = document.getElementsByClassName("orangered");
let purple = document.getElementsByClassName("purple");

// write in class name
for (i = 0; i < red.length; i++) 
{
    red[i].innerHTML = "Last 1";
}

// write in class name
for (i = 0; i < blue.length; i++) 
{
    blue[i].innerHTML = "Special";
}

// write in class name
for (i = 0; i < orangered.length; i++) 
{
    orangered[i].innerHTML = "New";
}

// write in class name
for (i = 0; i < purple.length; i++) 
{
    purple[i].innerHTML = "Exotic";
}

console.log(`Red ${red.length}\nBlue ${blue.length}\nOrangered ${orangered.length}\nPurple ${purple.length}`);