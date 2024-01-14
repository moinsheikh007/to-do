const inputField = document.getElementById('inputField');
const addBtn = document.getElementById('addBtn');
const listContainer = document.getElementById('listContainer');

inputField.addEventListener('keypress', function (event) {
    if(event.key === 'Enter') {
        event.preventDefault();
        addBtn.click();
    }
})

function addTask () {
    if(inputField.value === '') {
        alert('You Must Write Something');
    }
    else {
        const li = document.createElement('li');
        li.classList.add('task')
        li.innerHTML = inputField.value;
        listContainer.appendChild(li);

        const span = document.createElement('span');
        span.innerHTML = 'X';
        li.appendChild(span);
    }
    inputField.value = "";
};

listContainer.addEventListener('click', function (event) {
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle('active');
    }
    else if (event.target.tagName === 'SPAN') {
        event.target.parentElement.remove(event.target);
    }
})
