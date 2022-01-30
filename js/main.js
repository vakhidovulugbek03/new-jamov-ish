window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("header").style.backgroundColor = "#fff";
    document.getElementById("header").style.
      boxShadow = "0 10px 30px rgb(0 0 0 / 7%)";
    document.getElementById("demoBtn").style.backgroundColor = "#fe521d";
    document.getElementById("demoBtn").style.color = "#fff";
    document.getElementById('toTOP').style.display = "block";
  } else {
    document.getElementById("header").style.backgroundColor = "transparent";
    document.getElementById("header").style.
      boxShadow = "0 0px 0px rgb(0 0 0 / 0%)";
    document.getElementById("demoBtn").style.backgroundColor = "#fff";
    document.getElementById("demoBtn").style.color = "#fe521d";
    document.getElementById('toTOP').style.display = "none";
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

