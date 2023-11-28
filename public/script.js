
// const variables = { pressure: 0, flow: 0 };

// for (let v in variables)
//   variables[v] = Math.floor(Math.random() * 80);

// window.onload = function () {
//   for (let v in variables) {
//     // for (let e of document.querySelectorAll('.svg')[0].contentDocument.querySelectorAll(`.${v}`)) {
//       if (e.classList.contains("value")) {
//         e.textContent = variables[v];
//         updateColor(variables[v], e.parentElement);
//       }
//     }
//   }

// function updateColor(value, element) {
//   if (value > 50) {
//     element.style.fill = 'red';
//   } else if (value <= 30) {
//     element.style.fill = 'green';
//   } else {
//     // Добавьте дополнительные условия или цвет, если нужно
//     element.style.fill = 'black'; // Замените 'defaultColor' на желаемый цвет по умолчанию
//   }
// }
document.addEventListener('DOMContentLoaded', function () {
  const appElement = document.getElementById('app');

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      const data = await response.json();
      updateUI(data);
    } catch (error) {
      console.error('Ошибка получения данных:', error);
    }
  };

  const updateUI = (data) => {
    appElement.innerHTML = `
      <h1>WEB SCADA</h1>
      <p>Temperature: ${data.temperature} °C</p>
      <p>Pressure: ${data.pressure} Pa</p>
      <!-- Добавьте другие компоненты и параметры по необходимости -->
    `;
  };

  fetchData();
  setInterval(fetchData, 5000); // Запрос данных каждые 5 секунд
});
