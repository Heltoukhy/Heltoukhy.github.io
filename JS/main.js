
// Get Slider Items 

let sliderItem = Array.from(document.querySelectorAll(".slider-container img"));

// Get Number of Slide 

let slidesCount = sliderItem.length;

// Set current Slide 

let currentSlide = 1; 

// Get Slide Number Element 

let SlideElement = document.getElementById("slide-number");

// Prev and Next Buttons 

let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');

// Handle Click on Prv and Next buttons

prevBtn.onclick = PrevSlide;
nextBtn.onclick = NextSlide;

// Create The Main ul Element 

let ulElement = document.createElement('ul');

// Set Id on Created UL element 

ulElement.setAttribute('id','paganation-ul');

// Create List Items 'li' Based on slide count 

for( let i = 1 ; i <= slidesCount ; i++){

   let liElement = document.createElement('li');

   liElement.setAttribute('data-index',i);

   // Set stings in each li item 

   liElement.appendChild(document.createTextNode(i));

   // Append li to the Main Ul 

   ulElement.appendChild(liElement);


}

// ADD THE CREATED UL ON PAGE

document.getElementById('indicators').appendChild(ulElement);

// Get Created UL 

let createdUl = document.getElementById('paganation-ul');

// set Bulltes in Array 

let bullets = Array.from(document.querySelectorAll("#paganation-ul li"));

// Loop Through all bullets when on click 

for (let i = 0 ; i <bullets.length ; i++){

    bullets[i].onclick = function(){

        currentSlide = parseInt(this.getAttribute('data-index'));
    checker();
    }
}


// Next Slide Function 

function NextSlide(){

    if(nextBtn.classList.contains('disable')){
        // Do Nothing 
        return false;

    }else{

        currentSlide++;
    checker();
    }
}

// Prev Slide Function 

function PrevSlide(){

    if(prevBtn.classList.contains('disable')){
        // Do Nothing 
        return false;

    }else{

        currentSlide--;
    checker();
    }
}

// trigger function 

checker();

// Checker Function 

    function checker(){

        SlideElement.textContent = `Slide # ${currentSlide} of ${slidesCount}`;

    //Remove All Active classes 
    removeAllActive ();

    // set Active class in Current slide 

    sliderItem[currentSlide-1].classList.add('active');

    // set Active class in Polts 

    createdUl.children[currentSlide-1].classList.add('active');   

    // Check if the current slide is the first 

    if(currentSlide == 1){

        prevBtn.classList.add('disable');

    }else{

        prevBtn.classList.remove('disable');
    }

    // Check if the current slide is the last

    if(currentSlide == slidesCount){

        nextBtn.classList.add('disable');

    }else{

        nextBtn.classList.remove('disable');
    }

}

    // Remove all Active classes From imgs and Bullets 

    function removeAllActive (){

        // Loop through Images 

        sliderItem.forEach(function(img){

            img.classList.remove('active');

        });

        //Loop through bullets 

        bullets.forEach(function(bullet){

            bullet.classList.remove('active');

        });
    }



























