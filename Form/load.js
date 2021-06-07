"use strict";
window.addEventListener("load", () => {
  let addressContainer = document.querySelector(".address");
  if (localStorage.length > 0) {
    let objectList = localStorage.getItem("objectList");
    let dataSet = JSON.parse(objectList);
    for (let i = 0; i < Object.values(dataSet).length; i++) {
      let textTag = document.createElement("p");
      textTag.textContent = Object.values(dataSet)[i];
      addressContainer.appendChild(textTag);
    }
  }
});
