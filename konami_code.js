const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;

function init() {
  //debugger;
  const input = document.body;
  // Write your JavaScript code inside the init() function
    input.addEventListener('keydown', konKeyDownHandler)
  }

function konKeyDownHandler(e) {
  //console.log(e);
  const key = parseInt(e.which || e.detail);

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("Booyah!");
      index = 0;
    }
    } else {
      index = 0;
  }
}
init();
