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

img.addEventListener("dragstart", (e) => {
  e.preventDefault();
  e.dataTransfer.setData("text/plain", e.target.id || "dragged-image");
  e.dataTransfer.effectAllowed = "move";
});

img.addEventListener("drag", (e) => {
  console.log("dragging image");
});

img.addEventListener("dragend", (e) => {
  console.log("drag ended");
});
