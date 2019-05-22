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


window.onscroll = function() {fadeIn()}
const features = document.querySelector('.features-wrapper');
const featureScroll = features.offsetTop;
function fadeIn() {
    if((window.pageYOffset + 300) >= featureScroll) {
        features.classList.add('fadeIn');
        features.classList.remove('hide');
    } else {
        features.classList.remove('fadeIn');
        features.classList.add('hide')
    }
} 

// $(features).scroll(() => {
//     $('.features-content').fadeIn('slow');
// })

