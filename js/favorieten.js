document.addEventListener('DOMContentLoaded', () => {
    let favorieten = JSON.parse(localStorage.getItem('favorieten')) || [];
    const tabelBody = document.querySelector('#favorietenTabel tbody');
    
    
    favorieten.forEach(favoriet => {
        const rij = document.createElement('tr');
        rij.innerHTML = `
            <td>${favoriet.naam}</td>
            <td>${favoriet.populatie}</td>
            <td>${favoriet.afkorting}</td>
            <td>${favoriet.hoofdstad}</td>
            <td>${favoriet.valuta}</td>
        `;
        tabelBody.appendChild(rij);
    });
});





