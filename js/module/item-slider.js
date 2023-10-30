export const initItemSlider = () => {
    const itemSlider = function () {
        const item = document.querySelector('.item-description__slider');
        let swiper;
        if (item) {
            swiper = new Swiper(item, {
                loop: true,
                direction: 'horizontal',
                spaceBetween: 30,
                slidesPerView: 1,

                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        }
    };

    itemSlider();
}