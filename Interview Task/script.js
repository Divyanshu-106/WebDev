let Blue = true;

function toggleColor() {
  const box = document.getElementById("myBox");

  if (Blue === true) {
    box.style.backgroundColor = "blue";

    Blue = false;
  } else {
    box.style.backgroundColor = "red";

    Blue = true;
  }
}
