const cont = document.querySelector("#input-task");
const addTask = document.querySelector("#add-task");
const pendingList = document.querySelector("#pending ul");
const completedList = document.querySelector("#finished ul");
const pending_cnt = document.querySelector("#incomplete");
const complete_cnt = document.querySelector("#completed");

const tasksArr = loadTasks();

const updateCnt = () =>{
    const completedTasks = tasksArr.filter(task => task.completed);
    const pendingTasks = tasksArr.filter(task => !task.completed);
    pending_cnt.innerText = `Pending Tasks (${pendingTasks.length})`;
    complete_cnt.innerText = `Finished Tasks (${completedTasks.length})`;
}
// Event Listeners
cont.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask.click();
    }
});

addTask.addEventListener("click", () => {

    const value = cont.value.trim();

    if (value === "") return;

    const newTask = {
        text: value,
        completed: false
    };
    
    tasksArr.push(newTask);
    saveTasks();
    
    updateCnt();
    createTask(newTask);

    cont.value = "";
});

// Local Storage
function loadTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasks() {
    localStorage.setItem("tasks",JSON.stringify(tasksArr));
}

// Task Creation
function createTask(task) {

    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    const taskText = document.createElement("span");
    taskText.classList.add("task-text");
    taskText.textContent = task.text;

    const action = document.createElement("div");
    action.classList.add("action");

    const del = document.createElement("button");
    del.classList.add("del-btn");
    del.innerHTML = '<i class="fa-solid fa-trash"></i>';

    const completed = document.createElement("button");
    completed.classList.add("comp-btn");
    completed.innerHTML = '<i class="fa-solid fa-check"></i>';

    const edit = document.createElement("button");
    edit.classList.add("edit-btn");
    edit.innerHTML = '<i class="fa-solid fa-pen"></i>';

    action.append(del);
    action.append(completed);
    action.append(edit);

    taskCard.append(taskText);
    taskCard.append(action);

    // Initial Placement

    if (task.completed) {
        completedList.append(taskCard);
        taskText.classList.add("finished");
    } else {
        pendingList.append(taskCard);
    }

    // Delete

    del.addEventListener("click", () => {

        const idx = tasksArr.indexOf(task);

        if (idx !== -1) {
            tasksArr.splice(idx, 1);
            saveTasks();
            updateCnt();

        }

        taskCard.remove();
    });

    // Complete Toggle

    completed.addEventListener("click", () => {
        task.completed = !task.completed;
        if (task.completed) {
            completedList.append(taskCard);
            taskText.classList.add("finished");
        } else {
            pendingList.append(taskCard);
            taskText.classList.remove("finished");
        }
        saveTasks();
    updateCnt();
    });

    // Edit

    edit.addEventListener("click", () => {
        const newText = prompt("Edit task:", task.text);
        if (newText && newText.trim() !== "") {
            task.text = newText.trim();
            taskText.textContent = task.text;
            saveTasks();
        }
    });

    // Show / Hide Actions

    let visible = false;
    taskCard.addEventListener("click", () => {
        visible = !visible;
        action.style.display =visible ? "flex" : "none";
    });
}


tasksArr.forEach(task => {
    createTask(task);
    
});
updateCnt();

