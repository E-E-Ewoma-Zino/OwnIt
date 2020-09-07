// create slide index to use to count the slide
let slideIndex = 1;
let time = 5000;
let q = 3;
// this gets all class named "containers" and store
    //  as variable
    let mySlide = document.getElementsByClassName("container");

// calls the function slideshow
SlideShow();

// jump to a next or previous slide
function JumpSlide(n)
{
    console.log(`value ${slideIndex}`);
    slideIndex = n;
}

// create the main slide show function
function SlideShow() 
{
    // counter variable
    let i;
    

    // loop through slides and set the 
    // style to 'display: none'
    for (i = 0; i < mySlide.length; i++) {
        mySlide[i].style.display = "none";
    }

    try
    {    
        // this code activates the current 'slideIndex - 1' slide    
        mySlide[slideIndex - 1].style.display = "block";
    }
    catch(e)
    {
        console.log("Style Error " + slideIndex);
    }

    // slideIndex is incremened to move slide
    slideIndex++;

    // if the current slide is greater than the 
    // total number of slides set slide to 1 
    if (slideIndex > mySlide.length) {
        slideIndex = 1;
    }

    // if the current slide is less than the 
    // 1 of slides set slide to the total slide number 
    if (slideIndex < 1) {
        slideIndex = mySlide.length;
    }

    try
    {
        // automatic moving of the slide
        setTimeout(SlideShow, time);
    }
    catch (e) 
    {
        console.log("setTimeout Error");
    }
}