const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var slider = $("#myRange");
var slider2 = $("#myRange2");
var output = $("#ratting");
var output2 = $("#year");
var Intro = $("#introduce");
var showIntro = $("#show-introduce");
output.innerHTML = slider.value / 10;
output2.innerHTML = slider2.value;

slider.oninput = function() {
    output.innerHTML = this.value / 10;
}
slider2.oninput = function() {
    output2.innerHTML = this.value;
}
showIntro.onclick = function() {
    Intro.classList.toggle('change')
};