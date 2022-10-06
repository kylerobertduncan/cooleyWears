// const options = [
//   {
//     "altText": "Hills",
//     "id": "background1",
//     "type": "background",
//     "path": "backgrounds/Test_field_1.png"
//   },
//   {
//     "altText": "Path",
//     "id": "background2",
//     "type": "background",
//     "path": "backgrounds/Test_field_2.png"
//   },
//   {
//     "altText": "Imp",
//     "id": "character1",
//     "type": "character",
//     "path": "bodies/Test_Imp.png"
//   },
//   {
//     "altText": "Mouse",
//     "id": "character2",
//     "type": "character",
//     "path": "bodies/Test_Mouse.png"
//   },
//   {
//     "altText": "Slime",
//     "id": "character3",
//     "type": "character",
//     "path": "bodies/Test_slime.png"
//   },
//   {
//     "altText": "Dress",
//     "id": "clothing1",
//     "type": "clothing",
//     "path": "outfits/Test_Dress.png"
//   },
//   {
//     "altText": "Hi Kyle",
//     "id": "clothing2",
//     "type": "clothing",
//     "path": "outfits/Test_Kyle.png"
//   },
//   {
//     "altText": "Traveller",
//     "id": "clothing3",
//     "type": "clothing",
//     "path": "outfits/Test_Travelling.png"
//   }
// ]

// const buttons = document.querySelectorAll("button");
// buttons.forEach(b => {
//   const option = options.filter(o => o.id === b.id);
//   console.log(option);
//   const { altText, path, type } = option[0];
//   const layer = document.querySelector(`.${type}`);
//   b.addEventListener("click", () => {
//     layer.src = `./assets/${path}`;
//     layer.alt = altText;
//   })
// });

import { images } from "./images.js";

console.log(images);