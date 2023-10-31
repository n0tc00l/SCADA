function generateRandomValues(count) {
  let data = {};
  for (let i = 1; i <= count; i++) {
    let name = `A${i}`;
    let value = Math.floor(Math.random() * 80);
    data[name] = value;
  }
  return data;
}
const variables = { pressure: 0, flow: 0 };
for (let v in variables)
  variables[v] = Math.floor(Math.random() * 80);

function addAttributes(value) {
  if (value > 50) {
    return 'data-max="50" data-color="red"';
  } else if (value <= 30) {
    return 'data-max="30" data-color="green"';
  } else {
    return 'data-max="50" data-color="yellow"';
  }
}

function createTable(data) {
  let table = document.getElementById('myTable');
  let headerRow = table.insertRow();
  let nameHeader = headerRow.insertCell();
  nameHeader.innerHTML = '<b>Name</b>';
  let valueHeader = headerRow.insertCell();
  valueHeader.innerHTML = '<b>Value</b>';

  for (let name in data) {
    let value = data[name];
    let row = table.insertRow();
    let nameCell = row.insertCell();
    nameCell.innerHTML = name;
    let valueCell = row.insertCell();
    valueCell.innerHTML = value;
    valueCell.setAttribute('data-value', value);
    let attributes = addAttributes(value);
    valueCell.setAttribute('data-attributes', attributes);
  }
}

let data = generateRandomValues();
createTable(data);

let valueCells = document.querySelectorAll('td[data-attributes]');
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