const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

function init() {
  // Write your JavaScript code inside the init() function
  const input = document.body.querySelector('script')

  input.addEventListener('keydown', onKeyDownHandler)
    //console.log(e.which || e.detail)
  }

  function onKeyDownHandler(e) {
    console.log(e);
  const key = parseInt(e.key);

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
 }
