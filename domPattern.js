const showPattern = () => {
  let body = document.getElementById("theBody");
  let top = 25;
  let left = 25;
  let width = 300;
  let height = 300;
  let colorList = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet"
  ];

  while (width > 50) {
    let div = document.createElement("div");
    let color = colorList[Math.floor(Math.random() * colorList.length)];
    div.style.top = top + "px";
    div.style.left = left + "px";
    div.style.width = width + "px";
    div.style.height = height + "px";
    div.style.background = color;

    body.appendChild(div);

    top += 10;
    left += 10;
    width -= 20;
    height -= 20;
  }
};
