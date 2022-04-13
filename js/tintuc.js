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
// Đọc thêm
var temp = 0;
function docThem() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("read");
    if (temp == 1) {
        btnText.innerHTML = "Đọc thêm";
        moreText.style.display = "none";
        btnText.style.top = "740px";
        btnText.style.bottom = "-50px";
        temp = 0;
    } else {
        btnText.innerHTML = "Ẩn";
        btnText.style.top = "6740px";
        btnText.style.bottom = "-50px";
        moreText.style.display = "inline";
        temp = 1;

    }
}

// Chuyển danh sách sản phẩm
function plusList(n) {
    changeList(slideIndex += n);
}

function changeList(n) {
    let i;
    let slides = document.getElementsByClassName("tinNoiBat");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}