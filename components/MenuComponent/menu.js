class Menu {
    constructor(menuButton) {
        this.menuButton = menuButton;
        this.links = document.querySelectorAll('.links')
        this.menuButton.addEventListener('click', () => {
            this.toggleMenu()
        })
    }
    toggleMenu() {
        this.links.forEach((link) => {
            link.classList.toggle('hidden')
        })
    }
}

const menuToggle = document.querySelector('.menu')

const newMenu = new Menu(menuToggle);





