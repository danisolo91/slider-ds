const SliderDS = () => {

    const slider = document.getElementById('slider-ds');
    const slides = slider.getElementsByTagName('img');
    const prevBtn = slider.querySelector('#prev-btn');
    const nextBtn = slider.querySelector('#next-btn');

    let counter = 0;

    // By default, show the first slide
    slides[counter].classList.add('show');

    const loadEventListeners = () => {
        prevBtn.addEventListener('click', () => {
            slides[counter].classList.remove('show');
            counter--;
            if(counter < 0) counter = slides.length - 1;
            slides[counter].classList.add('show');
        });

        nextBtn.addEventListener('click', () => {
            slides[counter].classList.remove('show');
            counter++;
            if(counter >= slides.length) counter = 0;
            slides[counter].classList.add('show');
        });
    };

    const init = () => {
        loadEventListeners();
    };

    return { init }
};

const mySlider = SliderDS();

mySlider.init();