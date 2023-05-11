let input = document.getElementById('add-box');
let tasks =  document.getElementById('tasks');

let tasksArray = [];
let completeTasks = [];

function add(){
    let valorInput = input.value;
    if(valorInput.length > 30)
        return alert("Please create a shorter name")
    if(valorInput != "" && valorInput !== null && valorInput !== undefined){
        for(let task of tasksArray){
            if(valorInput == task)
                return alert("You already has a task with this name")
        }
        tasksArray.push(valorInput);
        input.value = "";
        refresh();
    }else{
        alert('Verify your input')
    }
}

function complete(task){
    let item = tasksArray.indexOf(task);
    console.log(item)
    if(item != -1){
        tasksArray.splice(item, 1);
        completeTasks.push(task)
    }else{
        completeTasks.splice(item, 1);
        tasksArray.push(task)
    }
    refresh();
}

function remove(task){
    let item = tasksArray.indexOf(task);
    console.log(item)
    if(item != -1){
        tasksArray.splice(item, 1);
    }else{
        completeTasks.splice(item, 1);
    }
    refresh();
}

function refresh(){
    tasks.innerHTML = "";
    let contador = 0;
    for(let task of tasksArray){
        contador++;
        let taskHTML = `
        <div id="${contador}" class="item">
        <div class="item-icon">
            <i class="gg-check-r" onclick="complete('${task}')"></i>
        </div>
        <div class="item-name">
            ${task}
        </div>
        <div class="item-button">
            <i class="gg-trash"></i><button class="delete" onClick="remove('${task}')">Delete</button>
        </div>
        </div>`

        tasks.innerHTML += taskHTML;
    }

    for(let task of completeTasks){
        contador++;
        let taskHTML = `
        <div id="${contador}" class="item-clicked">
        <div class="item-icon">
            <i class="gg-check-r" onclick="complete('${task}')"></i>
        </div>
        <div class="item-name">
            ${task}
        </div>
        <div class="item-button">
            <i class="gg-trash"></i><button class="delete" onClick="remove('${task}')">Delete</button>
        </div>
        </div>`

        tasks.innerHTML += taskHTML;
    }
}