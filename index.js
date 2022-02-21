const input = document.querySelector('.insert-data');
const textName = document.querySelector('.text');
const container = document.getElementById('container');
const message = document.querySelector('.message');
const errorMessage = document.querySelector('error-message');
const btn = document.querySelector('.btn');
const storedName = localStorage.getItem('name');



if(input) {
    textName.textContent = storedName;
}



// Inserisco il valore dell'input al textName
input.addEventListener('input', (e) => {
    const value = e.target.value;
    textName.textContent = value;
});



// Aggiungo il nome nel localStorage
function addLocalStorage() {
    if(input.value !== '') {
        localStorage.setItem('name', textName.textContent)
    }
    input.value = '';
};


btn.addEventListener('click', addLocalStorage);




// Inserisco il messaggio di conferma 
function addedToLocal(msg) {
    message.textContent = msg;
    message.style.display = 'block';
};




container.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn')) {
    addedToLocal('Name successfully added to the storage')    
    setTimeout(() => {message.style.display = 'none'}, 3000);
    }
});    


function showErrorMessage(msg) {
    errorMessage.textContent = msg; 
}

