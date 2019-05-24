//Mobile Nav Focus

const allLinks = document.querySelectorAll('.hamburger-links')

allLinks.forEach((link) => {
    link.addEventListener('mouseover', (focusLink) =>{
        focusLink.target.focus();
    })
})

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
    if((window.pageYOffset + 200) >= featureScroll) {
        features.classList.add('fadeIn');
        features.classList.remove('hide');
    } else {
        features.classList.remove('fadeIn');
        features.classList.add('hide');
    }
} 

//How it Works

// const jump = document.querySelector('.jump').onclick = function(){jumpTo()}

// function jumpTo() {
//     // window.scrollTo(0, document.querySelector('.slider-container').offsetTop - document.querySelector('.content').offsetHeight);
//     window.scroll(0,1000)
// }



// window.scrollTo(0, document.getElementById('toBeScrolledTo').offsetTop - document.getElementsByClassName('header')[0].offsetHeight);


// function jumpTo() {
//     const howItWorks = document.querySelector('.slider-container');
//     howItWorks.scrollIntoView({ block: 'end',  behavior: 'smooth' })
// }


///picSlider Component 

// class PicSlider {
//     constructor(picture){
//         this.picture = picture;
//         this.data = picture.dataset.text;
//         this.sliderContent = document.querySelector('.slider[data-text="${this.data}"}');
//         this.buttonItem = new PicItem(this.sliderContent);
//         this.picture.addEventListener('click', () => this.next())
//     };
//     next() {
//         const buttons = document.querySelectorAll('.slider-button');
//         Array.from(links).forEach((el) => {
//             el.classList.remove('selected')
//         })
//         this.picture.classList.add('selected')
//         this.buttonItem.next()
//     }
// }

// class PicItem {
//     constructor(item) {
//         this.item = item

//     }
//     next() {
//         const items = document.querySelectorAll('.slider')
//         items.forEach((element) => {
//             element.classList.remove('selected')
//         })
//         this.item.classList.add('selected')
//     }
// }

// const buttons = document.querySelectorAll('.slider-button')
// buttons.forEach((button) => {
//     return new PicSlider(button)
// })

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

// const nextButton = document.querySelector('.see-more');
// const names = Array.from(document.querySelectorAll('.next'));

// const mentorPicture = Array.from(document.querySelectorAll('.pic'));



// const next = nextButton.onclick = function () {goNext(mentors)};


// function goNext(arr) {

//     mentorPicture[0].setAttribute('src');
// ``

// }



