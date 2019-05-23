
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

// window.onload = function() {
//     if (window.jQuery) {  
//         // jQuery is loaded  
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }
// $(document).ready(function(){
//     $('.team-profiles').click(function() {
//         $('h5').fadeOut('slow');
//     })
// })

// $(document).ready(function () {
//     $('.team').click(function(){
//         $('h5').each(function() {
//             $(this).fadeOut('slow');
//         });
//     });

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





