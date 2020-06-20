var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
    } else {
    header.style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}