export class Dropdown {
    constructor(container) {
        this.container = container;
        this.toggleButton = container.querySelector('[data-toggle]');
        this.menu = container.querySelector('[data-menu]');

        this._setupEvents();
    }

    _setupEvents() {
        this.toggleButton.addEventListener('click', () => {
            this.menu.classList.toggle('visible');
        });

        document.addEventListener('click', (e) => {
            if (!this.container.contains(e.target)) {
                this.menu.classList.remove('visible');
            }
        });
    }
}