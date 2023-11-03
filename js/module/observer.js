export const initObserver = () => {
    const aboutWheel = document.querySelector('.about__wheel');
    const buttons = aboutWheel.querySelectorAll('.about__btn'); // Предполагаем, что все кнопки имеют класс `about__btn`

    const options = {
        root: null, // используем вьюпорт в качестве корневого элемента
        rootMargin: '0px', // без отступов
        threshold: 0.2 // коллбек будет вызван, когда элемент полностью виден
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Добавляем класс 'active' всем кнопкам
                buttons.forEach(btn => btn.classList.add('active'));
                // Прекращаем наблюдение за элементом, так как класс уже добавлен
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Наблюдаем за элементом .about__wheel
    observer.observe(aboutWheel);
};

// Теперь нет необходимости в отдельной функции handleIntersection, так как коллбек интегрирован прямо в IntersectionObserver
