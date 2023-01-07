
const tasks = document.querySelector('.tasks');

const ogInput = document.getElementById('og__input');

const addBtn = document.querySelector('.add');


// create new task and append
const makeAndAppend = (e) => {
    newTask = document.createElement('div');
    newTask.innerHTML = 
    `
    <div class="w-[50%] bg-gray-800 h-28 mx-auto rounded-md grid grid-rows-3 new__task mt-8">
            <input class="input bg-gray-600 mx-auto p-4 rounded-md w-[80%] text-blue-200 caret-blue-200 mt-6" 
            type="text" readonly value=${ ogInput.value }>
            <div class="flex text-blue-300 justify-center mt-8">
                <button><i class="edit fa-solid fa-pen p-2"></i></button>
                <button><i class="del fa-solid fa-trash p-2 "></i></button>
            </div>
        </div>
    `
    tasks.append(newTask);
}

// log input value
document.addEventListener('keyup', () => {console.log(ogInput.value)});


// delete new task in tasks
const delTask = (delBtn) => {
    delBtn.parentNode.parentNode.parentNode.remove()
}

// when add button is clicked, if input value is not empty string, 
// make new task appear and erase input value
addBtn.addEventListener ('click', (e) => {
    if(ogInput.value !== '') {
        makeAndAppend();
        ogInput.value = ''
    }
})


// listen on tasks div, if click on delete button, delete task div
tasks.addEventListener ('click', (e) => {
    if(e.target.classList.contains('del')) {
        delTask(e.target)
    }
})

// listen on tasks div, if click on edit button, toggle readonly
tasks.addEventListener ('click', (e) => {
    if(e.target.classList.contains('edit')) {
        // console.log(e.target.parentNode.parentNode.parentNode.querySelector('input'))
        const newTaskInput = e.target.parentNode.parentNode.parentNode.querySelector('input');
        if(newTaskInput.classList.contains('blue-border') === false) {
            newTaskInput.removeAttribute('readonly')
            newTaskInput.classList.add('blue-border')
        } else {
            newTaskInput.setAttribute('readonly', 'readonly')
            newTaskInput.classList.remove('blue-border')
        }
        }
    }
)