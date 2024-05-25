'use strict';

let form = document.getElementById('form');
let landInput = document.getElementById('land');
let populatieCheckbox = document.getElementById('populatie');
let afkortingCheckbox = document.getElementById('afkorting');
let hoofdstadCheckbox = document.getElementById('hoofdstad');
let currencyCheckbox = document.getElementById('currency');
let resultaat = document.getElementById('resultaat');


form.addEventListener('submit', submitForm);

async function submitForm(e) {
    e.preventDefault();
    
    const ingevoerdeLand = landInput.value;

    const { name, population, abbreviation, capital, currency, media } = await getData(ingevoerdeLand);

    if (name) {
        let resultaatTekst = '';
        resultaatTekst += `<h2>${name} <img src="${media.flag}" alt="Vlag van ${name}"></h2>`;

        if (populatieCheckbox.checked) {
            const geformatteerdePopulatie = formatteerPopulatie(population);
            resultaatTekst += `<p><strong>Populatie:</strong> ${geformatteerdePopulatie}</p>`;
        }

        if (afkortingCheckbox.checked) {
            resultaatTekst += `<p><strong>Afkorting:</strong> ${abbreviation}</p>`;
        }

        if (hoofdstadCheckbox.checked) {
            resultaatTekst += `<p><strong>Hoofdstad:</strong> ${capital}</p>`;
        }

        if (currencyCheckbox.checked) {
            resultaatTekst += `<p><strong>Valuta:</strong> ${currency}</p>`;
        }
        

        resultaat.innerHTML = resultaatTekst;
        document.getElementById('knop').style.display = 'block';

    } else {
        resultaat.textContent = 'Gegevens niet beschikbaar voor dit land.';
        document.getElementById('knop').style.display = 'none';
    }
}


async function getData(landNaam) {
    return new Promise((resolve, reject) => {
        fetch('https://api.sampleapis.com/countries/countries')
            .then(resp => resp.json())
            .then(landen => {
                const gevondenLand = landen.find(land => land.name.toLowerCase() === landNaam.toLowerCase());
                if (gevondenLand) {
                    resolve(gevondenLand);
                } else {
                    resolve(null);
                }
            })
            .catch(error => {
                console.error('Fout bij het ophalen van data:', error);
                reject(error);
            });
    });
}

function formatteerPopulatie(populatie) {
    return populatie.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

let favorietenKnop = document.getElementById('knop');
favorietenKnop.addEventListener('click', () => {
    addfavorieten(favorietenToegevoegd);
});

async function addfavorieten(callback) {
    const ingevoerdeLand = landInput.value;
    const { name, population, abbreviation, capital, currency } = await getData(ingevoerdeLand);

    const favorietLand = {
        naam: name,
        populatie: population,
        afkorting: abbreviation,
        hoofdstad: capital,
        valuta: currency
    };
    
    let favorieten = JSON.parse(localStorage.getItem('favorieten')) || [];
    favorieten.push(favorietLand);
    localStorage.setItem('favorieten', JSON.stringify(favorieten));
    
    if (callback && typeof callback === 'function') {
        callback();
    }
}

function favorietenToegevoegd() {
    console.log('Favorieten zijn succesvol toegevoegd!');
}