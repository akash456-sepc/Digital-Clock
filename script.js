let clock = document.querySelector(".clock");
let container = document.querySelector(".container");

function updateTime() {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}

setInterval(() => {
  updateTime();
}, 1000);