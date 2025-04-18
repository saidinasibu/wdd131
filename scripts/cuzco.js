// Obtener el año actual y la fecha de última modificación
const yearElement = document.getElementById('year');
const lastModifiedElement = document.getElementById('lastModified');
yearElement.textContent = new Date().getFullYear();
lastModifiedElement.textContent = document.lastModified;

// Sensación térmica
const tempElement = document.getElementById('temp');
const windElement = document.getElementById('wind');
const windChillElement = document.getElementById('windChill');

// Valores estáticos de temperatura y viento
const temperature = 8; // °C
const windSpeed = 6; // km/h

function calculateWindChill(temp, wind) {
    if (temp <= 10 && wind > 4.8) {
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(wind, 0.16) +
            0.3965 * temp * Math.pow(wind, 0.16)
        ).toFixed(1);
    } else {
        return 'N/A';
    }
}

// Calcular y mostrar la sensación térmica
const windChill = calculateWindChill(temperature, windSpeed);
windChillElement.textContent = windChill + ' °C';


// // Obtener el año actual y la fecha de última modificación
// const yearElement = document.getElementById('year');
// const lastModifiedElement = document.getElementById('lastModified');
// yearElement.textContent = new Date().getFullYear();
// lastModifiedElement.textContent = document.lastModified;

// // Sensación térmica
// const tempElement = document.getElementById('temp');
// const windElement = document.getElementById('wind');
// const windChillElement = document.getElementById('windChill');

// // Valores estáticos de temperatura y viento
// const temperature = 8; // °C
// const windSpeed = 6; // km/h

// function calculateWindChill(temp, wind) {
//   if (temp <= 10 && wind > 4.8) {
//     return (
//       13.12 +
//       0.6215 * temp -
//       11.37 * Math.pow(wind, 0.16) +
//       0.3965 * temp * Math.pow(wind, 0.16)
//     ).toFixed(1);
//   } else {
//     return 'N/A';
//   }
// }

// // Calcular y mostrar la sensación térmica
// const windChill = calculateWindChill(temperature, windSpeed);
// windChillElement.textContent = windChill + ' °C';