const SliderDS = () => {

    const slider = document.getElementById('slider-ds');
    const slidesContainer = slider.querySelector('.slides');
    const slides = slidesContainer.children;
    const prevBtn = slider.querySelector('#prev-btn');
    const nextBtn = slider.querySelector('#next-btn');
    const size = slides[0].clientWidth;
    let counter = 1;

    /*
    ** slidesContainer is flex display, so when we translateX,
    ** it will 'drag' with it all the images one image size
    ** to the left. The initial position in the array is 1,
    ** because 0 is a clone (last image)
    */
    slidesContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';

    const createClones = () => {
        const firstSlideClone = slides[0].cloneNode(true);
        const lastSlideClone = slides[slides.length - 1].cloneNode(true);

        firstSlideClone.id = 'firstSlideClone';
        lastSlideClone.id = 'lastSlideClone';

        slidesContainer.insertBefore(
            lastSlideClone,
            slidesContainer.firstChild
        );

        slidesContainer.appendChild(firstSlideClone);
    };

    const loadEventListeners = () => {
        prevBtn.addEventListener('click', () => {
            if(counter >= slides.length - 1) return;
            slidesContainer.style.transition = 'transform 0.4s ease-in-out';
            counter--;
            slidesContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
        });

        nextBtn.addEventListener('click', () => {
            if(counter <= 0) return;
            slidesContainer.style.transition = 'transform 0.4s ease-in-out';
            counter++;
            slidesContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
        });

        slidesContainer.addEventListener('transitionend', () => {
            if(counter < 0) counter = 0;
            if(counter > slides.length -1) counter = slides.length -1;
            if(slides[counter].id === 'lastSlideClone') {
                // jump to the last slide without any transition effect
                slidesContainer.style.transition = 'none';
                counter = slides.length - 2;
                slidesContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
            if(slides[counter].id === 'firstSlideClone') {
                // jump to the first slide without any transition effect
                slidesContainer.style.transition = 'none';
                counter = 1;
                slidesContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
        });
    };

    const init = () => {
        createClones();
        loadEventListeners();
    };

    return { init }
};

let mySlider = SliderDS();

mySlider.init();