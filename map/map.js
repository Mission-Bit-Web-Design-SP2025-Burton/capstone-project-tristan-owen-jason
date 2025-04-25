let r = document.querySelector(":root");
let increment = 100;
function IncreaseImageSize() {
  let rs = getComputedStyle(r);
  let rsSize = rs.getPropertyValue("--size");
  let value = parseInt(rsSize.replace(/px/, "")) + increment + "px";
  r.style.setProperty("--size", value);
  console.log(value);
}
function DecreaseImageSize() {
  let rs = getComputedStyle(r);
  let rsSize = rs.getPropertyValue("--size");
  let value = parseInt(rsSize.replace(/px/, "")) - increment + "px";
  if (parseInt(value.replace(/px/, "")) <= 0) {
    value = "100px";
  }
  r.style.setProperty("--size", value);
  console.log(value);
}

const img = document.getElementById("test-img");
const viewport = document.getElementById("viewport");
let offsetX = 0;
let offsetY = 0;

img.addEventListener("mousedown", (e) => {
  e.preventDefault();
  document.addEventListener("mousemove", moveImg);
  console.log("drag started");
  document.addEventListener("mouseup", dragEnd);
  offsetX = e.pageX - img.offsetLeft;
  offsetY = e.pageY - img.offsetTop;
  document.getElementById("test-img").style.cursor = "grabbing";
});

function moveImg(e) {
  img.style.position = "absolute";
  img.style.left = `${e.pageX - offsetX}px`;
  img.style.top = `${e.pageY - offsetY}px`;
  if (e.pageX < 0) {
    img.style.left = "0px";
  }
  if (e.pageY < 0) {
    img.style.top = "0px";
  }
  if (e.pageX > viewport.innerWidth - img.offsetWidth) {
    img.style.left = `${viewport.innerWidth - img.offsetWidth}px`;
  }
  if (e.pageY > viewport.innerHeight - img.offsetHeight) {
    img.style.top = `${viewport.innerHeight - img.offsetHeight}px`;
  }
  console.log(get);
}

function dragEnd(e) {
  document.removeEventListener("mousemove", moveImg);
  console.log("drag ended");
  document.removeEventListener("mouseup", dragEnd);
  document.getElementById("test-img").style.cursor = "grab";
}
