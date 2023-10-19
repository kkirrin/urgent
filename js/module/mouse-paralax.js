export const initParalax = () => {

    const mouseParralax = (element, options) => {
        let s = Object.assign({
            sensitivity: 0.5
        }, options);

        let container = element;
        let containerWidth = container.offsetWidth;
        let containerHeight = container.offsetHeight;

        let parralaxEls = container.querySelectorAll('[data-mouse-parralax]');
        let parralax = {};

        window.addEventListener('mousemove', function (e) {
            parralax.mouseX = e.pageX;
            parralax.mouseY = e.pageY;

            moveEls();
        });

        window.addEventListener("deviceorientation", handleOrientation, true);

        function handleOrientation(event) {
            console.log(event.absolute);
            // Do stuff with the new orientation data
        }

        function moveEls() {
            parralaxEls.forEach(function (el) {
                let dataVal = parseFloat(el.getAttribute('data-mouse-parralax'));
                let xPos = ((parralax.mouseX - containerWidth / 2) / containerWidth * 100) * dataVal * s.sensitivity;
                let yPos = ((parralax.mouseY - containerHeight / 2) / containerHeight * 100) * dataVal * s.sensitivity;

                el.style.transform = 'translate(' + xPos + 'px, ' + yPos + 'px)';
            });
        }
    }

    let elements = document.querySelectorAll('.mouse-parralax');
    console.log(elements);
    elements.forEach(function (el) {
        mouseParralax(el);
    });
}