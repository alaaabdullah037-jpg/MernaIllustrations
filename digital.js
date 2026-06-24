const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider) => {

    const slides = slider.querySelectorAll(".slide");
    const nextBtn = slider.querySelector(".next");
    const prevBtn = slider.querySelector(".prev");

    let index = 0;

    function showSlide(i) {

        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        slides[i].classList.add("active");
    }

    // إظهار أول صورة
    showSlide(index);

    // السهم اليمين
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {

            index++;

            if (index >= slides.length) {
                index = 0;
            }

            showSlide(index);

        });
    }

    // السهم الشمال
    if (prevBtn) {
        prevBtn.addEventListener("click", () => {

            index--;

            if (index < 0) {
                index = slides.length - 1;
            }

            showSlide(index);

        });
    }

});