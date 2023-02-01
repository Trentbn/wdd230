const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function() {

    const inputVal = input.value;

    const listItem = document.createElement('li');
    listItem.textContent = inputVal;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';

    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    deleteButton.addEventListener('click', function(event) {
        list.removeChild(listItem);
    })

    input.focus();

    input.value = '';




})