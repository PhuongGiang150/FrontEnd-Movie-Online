const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// Tab Line
const tabs = $$('.tab__item');
const pages = $$('.tab__page');
const tabActive = $('.tab__item.active')
const line = $('.tab__line');
line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';
tabs.forEach((tab, index) => {
    const page = pages[index];
    tab.onclick = function() {
        $('.tab__item.active').classList.remove('active');
        $('.tab__page.active').classList.remove('active');
        this.classList.add('active');
        page.classList.add('active');
        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';
    }
});

const tabFilms = $$('.tab-item');
const pageFilms = $$('.film-relate__item');
tabFilms.forEach((tabFilm, index) => {
    const pageFilm = pageFilms[index];
    tabFilm.onclick = function() {
        $('.tab-item.active').classList.remove('active');
        $('.film-relate__item.active').classList.remove('active');
        this.classList.add('active');
        pageFilm.classList.add('active');
    }
});

// // Input Range
// var slider = $("#myRange");
// var output = $("#ratting");
// output.innerHTML = slider.value / 10;
// slider.oninput = function() {
//     output.innerHTML = this.value / 10;
// }

// // Chose Episode

// var choseEpisode = $("#choose-episode");
// var Episode = $("#episode");
// var EpisodeIcon = $("#chose-icon");
// choseEpisode.onclick = function() {
//     Episode.classList.toggle('show');
//     EpisodeIcon.classList.toggle('down');
// };