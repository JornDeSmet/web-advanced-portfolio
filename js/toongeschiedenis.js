'use strict';
import { getHistory } from './geschiedenis.js';

document.addEventListener('DOMContentLoaded', () => {
    const historyTableBody = document.querySelector('#historyTable tbody');

    const history = getHistory();
    if (history.length === 0) {
        historyTableBody.innerHTML = '<tr><td colspan="5">Geen zoekgeschiedenis beschikbaar.</td></tr>';
    } else {
        history.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${formatteerPopulatie(item.population)}</td>
                <td>${item.abbreviation}</td>
                <td>${item.capital}</td>
                <td>${item.currency}</td>
            `;
            historyTableBody.appendChild(row);
        });
    }
});

function formatteerPopulatie(populatie) {
    return populatie.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
