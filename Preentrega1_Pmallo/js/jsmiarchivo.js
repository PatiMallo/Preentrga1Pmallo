// Precios de combustible
const precSuper = 77;
const precPrem = 80;
const rendBase = 12; // km por litro

// Pedir datos al usuario una sola vez
let tipoComb = prompt("Combustible (super/prem):").toLowerCase();
while (tipoComb !== 'super' && tipoComb !== 'prem') {
  tipoComb = prompt("Tipo de combustible no válido. Ingresa 'super' o 'prem':").toLowerCase();
}

let kms = parseInt(prompt("Kilómetros (10 a 500):"));
while (isNaN(kms) || kms < 10 || kms > 500) {
  kms = parseInt(prompt("Cantidad no válida. Ingresa un número entre 10 y 500:"));
}

let vel = parseInt(prompt("Velocidad (90, 100, 110, 120, 130):"));
while (isNaN(vel) || vel < 90 || vel > 130 || vel % 10 !== 0) {
  vel = parseInt(prompt("Velocidad no válida. Ingresa 90, 100, 110, 120 o 130:"));
}

// Calcular el consumo de combustible
let rend = rendBase;
if (tipoComb === "prem") {
  rend *= 1.2; // El combustible premium rinde más
}
if (vel >= 120) {
  rend *= 0.95; // Si la velocidad es mayor o igual a 120, rinde menos
}

let consLitros = kms / rend;
let costo;
if (tipoComb === "super") {
  costo = consLitros * precSuper;
} else {
  costo = consLitros * precPrem;
}

// Mostrar el resultado en un prompt
prompt(`Consumo: ${consLitros.toFixed(2)} litros.\nCosto total: $${costo.toFixed(2)}`);

// Mostrar datos en la consola para mayor claridad
console.log(`Tipo de combustible: ${tipoComb}`);
console.log(`Kilómetros: ${kms}`);
console.log(`Velocidad: ${vel}`);
console.log(`Consumo en litros: ${consLitros.toFixed(2)} litros`);
console.log(`Costo total: $${costo.toFixed(2)}`);