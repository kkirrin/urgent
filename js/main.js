import { initNav } from "./module/nav.js";
import { initSlider } from "./module/sliders.js";
import { initCurrentYear } from "./module/current-year.js";
import { initScrollToTop } from "./module/scroll-to-top.js";
import { initScroll } from "./module/scroll.js";
import { initCounterAnimation } from "./module/counter-animation.js";
import { initWheel } from "./module/wheel.js";
import { initParalax } from "./module/mouse-paralax.js";
import { initFlexSlider } from "./module/flex-slider.js";
import { initAccordion } from "./module/accordion.js";
import { initValidation } from "./module/validation.js";
import { initMask } from "./module/mask.js";
import { iniStickyHeader } from "./module/sticky-header.js";


window.addEventListener('DOMContentLoaded', () => {
    console.log('подключен скрипт main.js');

    initNav();
    initSlider();
    initCurrentYear();
    initScrollToTop();
    initScroll();
    initCounterAnimation();
    initWheel();
    initFlexSlider();
    baguetteBox.run('.gallery-wrapper');
    initAccordion();
    initValidation();
    initMask();
    iniStickyHeader();

    if (window.innerWidth > 767) {
        initParalax();
    }

    // DOMContentLoaded
});
