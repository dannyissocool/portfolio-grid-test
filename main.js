const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]


//Images array
let images = ['img/selfie1.jpg',
              'img/selfie2.jpg',
              'img/selfie3.jpg',
              'img/selfie4.jpg',
             ];

let imgStep = 0;
galleryClick(); //set first image after page loads



toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

//Scroll function
function scrollEvent() {
    /* Navbar */
    let navBox = document.getElementsByClassName('navbar')[0];
    /*About section*/
    let picBox = document.getElementsByClassName('about-pic')[0];
    let textBox = document.getElementsByClassName('about-text')[0];
    let aboutBox = document.getElementsByClassName('about')[0];

    let aboutBoxTop = aboutBox.getBoundingClientRect().top;
    let picBoxTop = picBox.getBoundingClientRect().top;
    let textBoxTop = textBox.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.4;

    
        
    if(picBoxTop < screenPosition){
        picBox.classList.add('about-pic-active');
    }
    if (textBoxTop < screenPosition) {
        textBox.classList.add('about-text-active');
    }
    else {
        navBox.classList.add('navbar-active')
    }
}

function galleryClick(){
    if (typeof images == 'undefined')   
    return;

    else if( imgStep == images.length )
    imgStep = 0;

    document.getElementById('imgToChange').src = images[imgStep];
    imgStep++;
}

window.addEventListener('scroll', scrollEvent);