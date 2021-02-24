const SliderDS = () => {

    const slider = document.getElementById('slider-ds');
    const slides = slider.getElementsByTagName('img');
    const prevBtn = createPrevBtn();
    const nextBtn = createNextBtn();
    const circles = createCircles();

    let counter = 0;

    // By default, show the first slide
    slides[counter].classList.add('show');
    circles[counter].classList.add('selected');

    function createPrevBtn() {
        const btn = document.createElement('i');

        btn.id = 'prev-btn';
        btn.className = 'fas fa-arrow-circle-left fa-2x';

        slider.appendChild(btn);

        return slider.querySelector('#prev-btn');;
    };

    function createNextBtn() {
        const btn = document.createElement('i');

        btn.id = 'next-btn';
        btn.className = 'fas fa-arrow-circle-right fa-2x';

        slider.appendChild(btn);

        return slider.querySelector('#next-btn');
    };

    function createCircles() {
        const circlesNav = document.createElement('div');

        circlesNav.classList.add('circles-nav');

        for(let i = 0; i < slides.length; i++) {
            const circle = document.createElement('div');
            circle.classList.add('circle');
            circle.dataset.position = i;
            circlesNav.appendChild(circle);
        }

        slider.appendChild(circlesNav);

        return slider.querySelector('.circles-nav').children;
    };

    const loadEventListeners = () => {
        prevBtn.addEventListener('click', () => {
            slides[counter].classList.remove('show');
            circles[counter].classList.remove('selected');
            counter--;
            if(counter < 0) counter = slides.length - 1;
            slides[counter].classList.add('show');
            circles[counter].classList.add('selected');
        });

        nextBtn.addEventListener('click', () => {
            slides[counter].classList.remove('show');
            circles[counter].classList.remove('selected');
            counter++;
            if(counter >= slides.length) counter = 0;
            slides[counter].classList.add('show');
            circles[counter].classList.add('selected');
        });

        Array.from(circles).forEach(circle => {
            circle.addEventListener('click', () => {
                slides[counter].classList.remove('show');
                circles[counter].classList.remove('selected');
                counter = circle.dataset.position;
                slides[counter].classList.add('show');
                circles[counter].classList.add('selected');
            });
        });
    };

    const startAutoAdvance = () => {
        setInterval(() => {
            slides[counter].classList.remove('show');
            circles[counter].classList.remove('selected');
            counter++;
            if(counter >= slides.length) counter = 0;
            slides[counter].classList.add('show');
            circles[counter].classList.add('selected');
        }, 5000);
    };

    const init = () => {
        loadEventListeners();
        startAutoAdvance();
    };

    return { init }
};

const mySlider = SliderDS();

mySlider.init();