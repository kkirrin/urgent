const data = {
    "лаборатория": {
        "text": "Собственная лаборатория и широкий ассортимент продукции",
        "img": "1"
    },
    "отдел": {
        "text": "Отдел исследований и разработки",
        "img": "2"
    },
    "производство": {
        "text": "Собственное производство и качественная продукция",
        "img": "3"
    },
    "инновации": {
        "text": "Постоянные инновации и улучшения продукции",
        "img": "4"
    },
    "качество": {
        "text": "Высокое качество и стандарты безопасности",
        "img": "5"
    },
    "клиенты": {
        "text": "Довольные клиенты и долгосрочные отношения",
        "img": "6"
    }
};

export const initWheel = () => {
    const buttons = document.querySelectorAll('.about__btn');
    const output = document.querySelector('.about__text');
    const img = document.querySelector('.about__img');

    buttons.forEach((button) => {

        button.addEventListener('click', function () {

            buttons.forEach((btn) => {
                btn.classList.remove('is-active');
            });

            button.classList.add('is-active');
            let key = button.getAttribute('data-key');
            let value = data[key];

            // изменяем текст
            output.textContent = value.text;

            // изменяем путь к изображению
            img.setAttribute('src', `./src/img/bg/about-bg-${value.img}.webp`);
        });
    });
}
