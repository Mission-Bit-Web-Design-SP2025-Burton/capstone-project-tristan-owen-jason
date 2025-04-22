var r = document.querySelector(":root");

function IncreaseImageSize() {
  var rs = getComputedStyle(r);
  r.style.setProperty("--size", "200px");
}
