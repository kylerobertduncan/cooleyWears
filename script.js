const options = [
  {
    id: "background1",
    type: "background",
    path: "backgrounds/Test_field_1.png"
  },
  {
    id: "background2",
    type: "background",
    path: "backgrounds/Test_field_2.png"
  },
  {
    id: "character1",
    type: "character",
    path: "bodies/Test_Imp.png"
  },
  {
    id: "character2",
    type: "character",
    path: "bodies/Test_Mouse.png"
  },
  {
    id: "character3",
    type: "character",
    path: "bodies/Test_slime.png"
  },
  {
    id: "clothing1",
    type: "clothing",
    path: "outfits/Test_Dress.png"
  },
  {
    id: "clothing2",
    type: "clothing",
    path: "outfits/Test_Kyle.png"
  },
  {
    id: "clothing3",
    type: "clothing",
    path: "outfits/Test_Travelling.png"
  }
]

const buttons = document.querySelectorAll("button");
buttons.forEach(b => {
  const option = options.filter(o => o.id === b.id);
  const { path, type } = option[0];
  const layer = document.querySelector(`.${type}`);
  b.addEventListener("click", () => {
    layer.src = `./assets/${path}`;
  })
});
