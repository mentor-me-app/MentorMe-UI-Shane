//NavBar

window.onload = function() {fixed()}
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
    if((window.pageYOffset + 550) >= featureScroll) {
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

//Featured Mentors

mentors = [
        {
        'id': 1, 
        'name': 'John Smith',
        'job': 'Baker',
        'detail': '5 years of baking',
    },

        {
        'id': 2, 
        'name': 'Jerry Tom',
        'job': 'Club Owner',
        'detail': 'Consultant for MGM',
    },

        {
        'id': 3, 
        'name': 'Beth Tuck',
        'job': 'Restaurant Owner',
        'detail': 'Over 30 years in the restaurant industry. '
    },

]

const nextButton = document.querySelector('.see-more');
const names = Array.from(document.querySelectorAll('.next'));
console.log(names)
const mentorPicture = Array.from(document.querySelectorAll('.pic'));



const next = nextButton.onclick = function () {goNext(mentors)};


function goNext(arr) {

    mentorPicture[0].setAttribute('src');
``

}



