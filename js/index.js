var slideIndex = 0;
function showSlidesAuto() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    auto = setTimeout(showSlidesAuto, 2000); // Change image every 2 seconds
}
function changeSlides(n) {
    clearTimeout(auto);
    auto = 0;
    showSlides(slideIndex += n);
}
function stop() {
    clearTimeout(auto);
    auto = 0;
}
function play() {
    if (auto == 0) {
        showSlidesAuto();
    }
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
function backToTop() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        backTo.style.display = "block";
    } else {
        backTo.style.display = "none";
    }
}