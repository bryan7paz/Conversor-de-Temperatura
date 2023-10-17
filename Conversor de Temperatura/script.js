document.getElementById("celsius-button").addEventListener("click", convertToCelsius);
document.getElementById("fahrenheit-button").addEventListener("click", convertToFahrenheit);

function convertToCelsius() {
    const temperature = parseFloat(document.getElementById("temperature-input").value);
    const result = ((temperature - 32) * 5/9).toFixed(2);
    document.getElementById("result").textContent = `${temperature} °F é igual a ${result} °C`;
}

function convertToFahrenheit() {
    const temperature = parseFloat(document.getElementById("temperature-input").value);
    const result = ((temperature * 9/5) + 32).toFixed(2);
    document.getElementById("result").textContent = `${temperature} °C é igual a ${result} °F`;
}
