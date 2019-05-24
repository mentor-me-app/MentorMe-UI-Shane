///Scroll Nav
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

//Mobile Nav Focus

const allLinks = document.querySelectorAll('.hamburger-links')

allLinks.forEach((link) => {
    link.addEventListener('mouseover', (focusLink) =>{
        focusLink.target.focus();
    })
})

const hamburgerFocus = document.querySelector('.menu');
hamburgerFocus.addEventListener('mouseover', ((focus) => {
    focus.target.focus();

}))


//Fade in J Query

$(document).ready(function() {
    $('.team').click(function() {
        $('h5').each(function() {
            $(this).toggleClass('hide');
        })
        $('p').each(function() {
            $(this).toggleClass('hide');
        })
        $('.icons').each(function() {
            $(this).toggleClass('hide');
        })
    })
})





