function updateFooter() {
    const yearSpan = document.getElementById('currentyear');
    const lastModifiedSpan = document.getElementById('lastModified');

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    yearSpan.textContent = currentYear;
    lastModifiedSpan.textContent = lastModified;
}

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return (
            13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temperature * Math.pow(windSpeed, 0.16)
        ).toFixed(1);
    } else {
        return 'N/A';
    }
}

function updateWindChill() {
    const windChillSpan = document.getElementById('windChill');

    const temperature = 24;
    const windSpeed = 10;

    const windChill = calculateWindChill(temperature, windSpeed);
    windChillSpan.textContent = windChill;
}

document.addEventListener('DOMContentLoaded', () => {
    updateFooter();
    updateWindChill();
});