import { Dropdown } from './dropdown.js';
import { Carousel } from './carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-dropdown]').forEach((el) => {
        new Dropdown(el);
    });

    document.querySelectorAll('[data-carousel]').forEach((el) => {
        new Carousel(el);
    });
});