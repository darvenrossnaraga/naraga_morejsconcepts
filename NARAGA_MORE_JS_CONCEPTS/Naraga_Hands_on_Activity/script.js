document.getElementById('searchBtn').addEventListener('click', fetchCountry);

function fetchCountry() {
    const country = document.getElementById('countryName').value.trim();
    if (country === '') {
        alert('Please enter a country name!');
        return;
    }

    const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(country)}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            if (!data || data.status === 404) {
                showError('Country not found. Try another name.');
            } else {
                displayCountry(data[0]);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showError('Something went wrong. Try again later.');
        });
}

function displayCountry(data) {
    const countryResult = document.getElementById('countryResult');
    countryResult.innerHTML = `
        <img src="${data.flags.png}" alt="Flag of ${data.name.common}">
        <h2>${data.name.common} (${data.cca2})</h2>
        <p><strong>Capital:</strong> ${data.capital ? data.capital[0] : 'N/A'}</p>
        <p><strong>Region:</strong> ${data.region}</p>
        <p><strong>Population:</strong> ${data.population.toLocaleString()}</p>
        <p><strong>Currency:</strong> ${Object.values(data.currencies)[0].name} (${Object.values(data.currencies)[0].symbol})</p>
        <p><strong>Languages:</strong> ${Object.values(data.languages).join(', ')}</p>
    `;
    countryResult.style.display = 'block';
}

function showError(message) {
    const countryResult = document.getElementById('countryResult');
    countryResult.innerHTML = `<p style="color: red; font-size: 1.2em;">${message}</p>`;
    countryResult.style.display = 'block';
}
