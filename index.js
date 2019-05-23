//NavBar

window.onscroll = function() {fixed()}
const header = document.querySelector('header');
const headerStick = header.offsetTop;
function fixed(){
    if(window.pageYOffset >= headerStick) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
}



//Features Section 


document.onscroll = function() {fadeIn()}
const features = document.querySelector('.features-wrapper');
const featureScroll = features.offsetTop;
function fadeIn() {
    if((window.pageYOffset + 300) >= featureScroll) {
        features.classList.add('fadeIn');
        features.classList.remove('hide');
    } else {
        features.classList.remove('fadeIn');
        features.classList.add('hide');
    }
} 

//How it Works

const jump = document.querySelector('.color').onclick = function(){jumpTo()}

function jumpTo() {
    const howItWorks = document.querySelector('.slider-container');
    howItWorks.scrollIntoView({ block: 'end',  behavior: 'smooth' });
}

// const jumpTo = document.querySelector('.picSlider-wrapper').pageYOffset;
// console.log(jumpTo)






