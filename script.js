const variables = { pressure: 0, flow: 0 };

for (let v in variables)
  variables[v] = Math.floor(Math.random() * 80);


window.onload = function () {
  for (let v in variables) {
    for (let e of document.querySelectorAll('.svg')[0].contentDocument.querySelectorAll(`.${v}`)) {
      if(e.classList.contains("value"))
      e.textContent = variables[v]
    }
  }
}
function addAttributes(value) {

  if (value > 50) {

    return 'data-max="50" data-color="red"';

  }
  else if (value <= 30) {

    return 'data-max="30" data-color="green"';

  }


}



let valueCells = document.querySelectorAll('[data-attributes]');

valueCells.forEach(cell => {

  let attributes = cell.getAttribute('data-attributes');

  if (attributes) {

    let max = attributes.includes('data-max="50"') || attributes.includes('data-max="30"');

    let color = attributes.includes('data-color');

    if (max) {

      cell.setAttribute('data-max', '50');

    }

    if (color) {

      if (attributes.includes('data-color="red"')) {

        cell.style.backgroundColor = 'red';

      } else if (attributes.includes('data-color="green"')) {

        cell.style.backgroundColor = 'green';

      } else {

        cell.style.backgroundColor = 'yellow';

      }

    }

  }

});
