let imgDiv = document.querySelector(".image-div");

let filterbtns = document.getElementsByTagName("button");

let blendModeOptions = document.getElementsByTagName("option");
let blendModeMenu = document.querySelector("#blend-mode-menu");
// console.log(filterbtns);
for (btn of filterbtns) {
  //   console.log(btn);
  btn.addEventListener("click", function (e) {
    console.log(e.target.dataset.filterType);
    imgDiv.style.filter = `${e.target.dataset.filterType}(70%)`;
  });
}

blendModeMenu.addEventListener("change", function () {
  imgDiv.style.backgroundBlendMode = ` ${blendModeMenu.value}`;
});
