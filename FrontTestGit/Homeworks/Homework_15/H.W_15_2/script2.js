let taskList = [];

function addNewTask() {
    let newItemInput = document.getElementById("newItem");
    let newTaskText = newItemInput.value.trim();

    if (newTaskText) {
        let newTask = {
            id: Date.now(),
            text: newTaskText,
            isDone: false
        };

        taskList.push(newTask);

        renderTaskList();
        newItemInput.value = ""; // Очистить поле ввода
    }
}

function renderTaskList() {
    let taskListHTML = "";

    for (let task of taskList) {
        let taskHTML = `
            <li>
                <input type="checkbox" <span class="math-inline">\{task\.isDone ? "checked" \: ""\} onchange\="toggleTaskDone\(</span>{task.id})">
                <span class="<span class="math-inline">\{task\.isDone ? "done" \: ""\}"\></span\></span>{task.text}
                <button onclick="deleteTask(${task.id})">X</button>
            </li>
        `;

        taskListHTML += taskHTML;
    }

    document.getElementById("taskList").innerHTML = taskListHTML;
}

function toggleTaskDone(taskId) {
    let taskIndex = taskList.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        taskList[taskIndex].isDone = !taskList[taskIndex].isDone;
        renderTaskList();
    }
}

function deleteTask(taskId) {
    let taskIndex = taskList.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        taskList.splice(taskIndex, 1);
        renderTaskList();
    }
}
