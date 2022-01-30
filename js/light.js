window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("header").style.backgroundColor = "#fff";
    document.getElementById("header").style.
      boxShadow = "0 10px 30px rgb(0 0 0 / 7%)";
    document.getElementById("nav__link-1").style.color = "#333";
    document.getElementById("nav__link-2").style.color = "#333";
    document.getElementById("nav__link-3").style.color = "#333";
    document.getElementById("nav__link-4").style.color = "#333";
    document.getElementById("nav__link-5").style.color = "#333";
    document.getElementById("nav__link-6").style.color = "#333";
    document.getElementById("nav__link-7").style.color = "#333";
    document.getElementById("basket-btn").style.color = "#333";
    document.getElementById("searchBtn").style.color = "#333";
    document.getElementById("demoBtn").style.backgroundColor = "#fe521d";
    document.getElementById("demoBtn").style.color = "#fff";
    document.getElementById('about__logo').style.backgroundImage = "url('https://strend-vue.envytheme.com/_nuxt/img/black-logo.2d0bbd0.png')"

  } else {
    document.getElementById("header").style.backgroundColor = "transparent";
    document.getElementById("nav__link-1").style.color = "#fff";
    document.getElementById("nav__link-2").style.color = "#fff";
    document.getElementById("nav__link-3").style.color = "#fff";
    document.getElementById("nav__link-4").style.color = "#fff";
    document.getElementById("nav__link-5").style.color = "#fff";
    document.getElementById("nav__link-6").style.color = "#fff";
    document.getElementById("nav__link-7").style.color = "#fff";
    document.getElementById("basket-btn").style.color = "#fff";
    document.getElementById("searchBtn").style.color = "#fff";
    document.getElementById("header").style.
      boxShadow = "0 0px 0px rgb(0 0 0 / 0%)";
    document.getElementById("demoBtn").style.backgroundColor = "#fff";
    document.getElementById("demoBtn").style.color = "#fe521d";
    document.getElementById('about__logo').style.backgroundImage = "url('https://strend-vue.envytheme.com/_nuxt/img/white-logo.75b255a.png')"
  }
}

let elSearchBtn = document.getElementById('searchBtn');
let elModal = document.getElementById('show');
let elClose = document.getElementById('closeBtn');

elSearchBtn.addEventListener('click', function () {
  elModal.classList.add('show');
})
elClose.addEventListener('click', function () {
  elModal.classList.remove('show');
})

