console.log(
    "Hah yes Peace"
);

// Function to open side nav
function Openbtn() 
{
    document.getElementById("Side-Nav").style.display = "block";
    document.getElementById("Side-Nav").style.width = "250px";
    document.getElementById("Side-Nav").style.transition = "width 2s ease-in";
}

// Function to close the side nav
function Closebtn() 
{
    document.getElementById("Side-Nav").style.display = "none";
    document.getElementById("Side-Nav").style.width = "0px";
    document.getElementById("Side-Nav").style.transition = "width 2s ease-in";
}

// Function to open card navigation
function OpenNav() 
{
    document.getElementsByClassName("Side-Nav")[0].style.display = "block";
    document.getElementsByClassName("Side-Nav")[0].style.width = "250px";
    document.getElementsByClassName("Side-Nav")[0].style.transition = "width 2s ease-in";
}

// Function to close card navigation
function CloseNav() 
{
    document.getElementsByClassName("Side-Nav")[0].style.display = "none";
    document.getElementsByClassName("Side-Nav")[0].style.width = "0px";
    document.getElementsByClassName("Side-Nav")[0].style.transition = "width 2s ease-in";
}

// 
// 
// This part controles which category of cards are shown
function Category(Event_Handler, category, num) 
{
    // create counter variable
    let i;
    // creates variable to hold card
    let card = document.getElementsByClassName("card");
    
    //This section hide all cards in card-body
    for(i = 0; i < card.length; i++)
    {
        card[i].style.display = "none";
    }

    
    for(i = 0; i < num; i++)
    {
        // this part shows the current link
        console.log(`Current Category: ${category}\nCategory Number: ${num}`);

        try
        {
            // and also shows the current category
            document.getElementsByClassName(category)[i].style.display = "inline-block";
        }
        catch(e)
        {
            console.log("Style error: "+ e);
        }

        // write the name of the category
        document.getElementsByClassName("category-name")[0].innerHTML = category;
    }

    console.log(`Card ${card.length}\n${category} ${category.length}`);

    // Close the nav bar
    console.log("Close()");
    CloseNav();
}

// 
// 
// This part controls how the top nav displays. if the screen is 900 and above
// this will monitor the scroling of the windows
window.onscroll = function()
{
    SlideDownNav();
}

// function to control the nav action
function SlideDownNav()
{
     
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        console.log("Displaying nav");
        document.getElementById("Horizontal-nav").style.top = "0";
    }
    else
    {
        console.log("Removing nav");
        document.getElementById("Horizontal-nav").style.top = "-50";
    }
}