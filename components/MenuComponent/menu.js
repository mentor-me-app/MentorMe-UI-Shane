class Menu {
    constructor(menuButton) {
        this.menuButton = menuButton;
        this.link = document.querySelector('.links-wrapper')
        this.menuButton.addEventListener('click', () => {
            this.toggleMenu()
        })
    }
    toggleMenu() {
        this.link.classList.toggle('hidden');
    }
}

const menuToggle = document.querySelector('.menu')

const newMenu = new Menu(menuToggle);





