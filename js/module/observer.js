export const initObserver = () => {
    const aboutSection = document.querySelector('.about');
    const btn1 = document.querySelector('.about__btn-1');
    const btn2 = document.querySelector('.about__btn-2');
    const btn3 = document.querySelector('.about__btn-3');
    const btn4 = document.querySelector('.about__btn-4');
    const btn5 = document.querySelector('.about__btn-5');
    const btn6 = document.querySelector('.about__btn-6');

    const options = {
        root: null, // используем вьюпорт в качестве корневого элемента
        rootMargin: '0px', // без отступов
        threshold: 0.1 // коллбек будет вызван, когда 50% элемента видно
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(aboutSection);
    observer.observe(btn1);
    observer.observe(btn2);
    observer.observe(btn3);
    observer.observe(btn4);
    observer.observe(btn5);
    observer.observe(btn6);
};

const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
};
