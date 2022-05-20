const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const val = input.value;
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listText.textContent = val;
    listBtn.textContent = '✖';
    listItem.appendChild(listText);
    listItem.appendChild(listBtn);
    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });
    
    input.value = '';
    input.focus();
});