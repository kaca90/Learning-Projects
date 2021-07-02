let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');
let inputNewTask = document.querySelector('#enter');
let btnAdd = document.querySelector('#add');
let btnAddToStart = document.querySelector('#addToStart');
let btnAddToEnd = document.querySelector('#addToEnd');


ul.addEventListener('click', e => {
    if (e.target.tagName == "LI") {
        e.target.remove();
    }
});

//Add task on enter
inputNewTask.addEventListener('keyup', e => {
    if (e.keyCode == 13) {
        let newTask = inputNewTask.value;
        if (newTask.trim() != "" && newTask != null) {
            let liNewTask = document.createElement('li');

            //Write value from input field to liNewTask
            liNewTask.textContent = newTask;

            //Add new li to ul
            if (btnAddToStart.checked) {
                ul.prepend(liNewTask);
            }
            else {
                ul.appendChild(liNewTask);
            }

            //Empty input field
            inputNewTask.value = "";
        }
        else {
            alert("You must enter a new task!");
        }
    }
});

//Add task on button
btnAdd.addEventListener('click', e => {
    let newTask = inputNewTask.value;
    if (newTask.trim() != "" && newTask != null) {
        let liNewTask = document.createElement('li');

        //Write value from input field to liNewTask
        liNewTask.innerHTML = newTask;
        
        //Add new li to ul
        if (btnAddToStart.checked) {
            ul.insertBefore(liNewTask, ul.childNodes[0]);
        }
        else if (btnAddToEnd.checked) {
            ul.appendChild(liNewTask);
        }

        //Empty input field
        inputNewTask.value = "";
    }
    else {
        alert("You must enter a new task!");
    }
});
