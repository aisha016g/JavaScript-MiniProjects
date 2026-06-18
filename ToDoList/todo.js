const cont = document.querySelector("#input-task");
const addTask = document.querySelector("#add-task");
const pendingList = document.querySelector("#pending ul");
const completedList = document.querySelector("#finished ul");

// console.log(addTask);


addTask.addEventListener("click",()=>{
    if(cont.value.trim() != "" ){
    console.log(cont.value.trim());

    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    const taskText = document.createElement("span");
    taskText.classList.add("task-text");
    
    const action = document.createElement("div");
    action.classList.add("action");

    const del = document.createElement("button");
    del.classList.add("del-btn");
    
    const completed = document.createElement("button");
    completed.classList.add("comp-btn");

    const edit = document.createElement("button");
    edit.classList.add("edit-btn");

    taskText.append(cont.value.trim());
    
    taskCard.append(taskText);
    taskCard.append(action);
    
    action.append(del);
    del.append("delete");
    
    action.append(completed);
    completed.append("completed");
    
    action.append(edit);
    edit.append("edit");
    
    pendingList.append(taskCard);
    console.log(pendingList);
    cont.value="";

    del.addEventListener("click",() =>{
        taskCard.remove();
    });
    
    completed.addEventListener("click",() =>{
        completedList.append(taskCard);
    });
    
    edit.addEventListener("click",() =>{
        const newText = prompt();
        if(newText != null && newText.trim() != "")
        taskText.innerText = newText.trim();
    });

    let visible = false;
    taskCard.addEventListener("click",() =>{
        if(!visible)
        {
            console.log("visible");
            action.style.display = "flex";
            visible = true;
        }
        else
            {
                console.log("hidden");
            action.style.display = "none";
            visible = false;
            }
    });
    }
    
});
