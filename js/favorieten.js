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
    if (tabelBody.children.length > 0) {
        document.getElementById('clear').style.display = 'block';
    }else{
        document.getElementById('clear').style.display = 'none';
    }
});

const clearButton = document.getElementById('clear');
const popup = document.getElementById('popup');
const cancelButton = document.getElementById('cancel');
const deleteButton = document.getElementById('delete');

clearButton.addEventListener('click', () => {
    popup.classList.add('active');
});

cancelButton.addEventListener('click', () => {
    popup.classList.remove('active');
});

deleteButton.addEventListener('click', () => {
    clearLocalStorage();
    popup.classList.remove('active');
    document.getElementById('clear').style.display = 'none';
});

function clearLocalStorage() {
    localStorage.clear();
    location.reload();
}




