export const iniStickyHeader = () => {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        console.log(scrollTop);
        if (scrollTop >= 50) {
            header.classList.add('header-fix');
        } else {
            header.classList.remove('header-fix');
        }
    });
}
