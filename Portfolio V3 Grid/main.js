const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})


function scrollEvent() {
    /* Navbar */
    let navBox = document.getElementsByClassName('navbar')[0];
    /*About section*/
    let picBox = document.getElementsByClassName('about-pic')[0];
    let textBox = document.getElementsByClassName('about-text')[0];
    let aboutBox = document.getElementsByClassName('about')[0];

    let aboutBoxTop = aboutBox.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.4;

    
        
    if(aboutBoxTop < screenPosition){
        picBox.classList.add('about-pic-active');
        textBox.classList.add('about-text-active');
    }
    else {
        navBox.classList.add('navbar-active')
    }
}

window.addEventListener('scroll', scrollEvent);