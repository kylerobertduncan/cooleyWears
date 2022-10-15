import { images } from "./images.js";

function changeLayer(id) {
  const info = images.filter(i => i.id == id);
  const {altText, path, type } = info[0];
  const layer = document.querySelector(`.${type}`);
  layer.alt = altText;
  layer.src = `./assets/${path}`;
}

function changeTab(layer) {
  const options = images.filter(i => i.type == layer);

  const ul = document.querySelector(".layerChoices");
  ul.innerHTML = "";

  options.forEach(o => {
    const {altText, id, path} = o;
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.id = id;
    button.innerHTML = `
      <img alt=${altText} src="./assets/${path}"/>
    `;
    li.appendChild(button);
    ul.appendChild(li);
    button.addEventListener("click", () => changeLayer(id));
  })
}

const tabs = document.querySelector(".layerTabs");
tabs.addEventListener("input", e => changeTab(e.target.id));
changeTab("backgrounds");
