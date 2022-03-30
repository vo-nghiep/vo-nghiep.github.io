var slideIndex = 0;
// Tự động chuyển ảnh
function showSlidesAuto() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    auto = setTimeout(showSlidesAuto, 3000); // Change image every 3 seconds
}
// Dừng chuyển ảnh
function stop() {
    clearTimeout(auto);
    auto = 0;
    document.getElementById('stop').style.display = "none";
    document.getElementById('play').style.display = "block";
}
// Bắt đầu chuyển ảnh
function play() {
    if (auto == 0) {
        showSlidesAuto();
        document.getElementById('stop').style.display = "block";
        document.getElementById('play').style.display = "none";
    }
}
// Chuyển ảnh thủ công
function changeSlides(n) {
    clearTimeout(auto);
    auto = 0;
    showSlides(slideIndex += n);
    document.getElementById('stop').style.display = "none";
    document.getElementById('play').style.display = "block";
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
// Quay lại đầu trang
function backToTop() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        backTo.style.display = "block";
    } else {
        backTo.style.display = "none";
    }
}
var then = window.pageYOffset;
window.onscroll = function () { nav() }
function nav() {
    var now = window.pageYOffset;
    if (then > now) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
    then = now;
}
