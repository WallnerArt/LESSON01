function addTodo() {
    var todoInput = document.getElementById("todoInput");
    var todoList = document.getElementById("todoList");
    
    if (todoInput.value === "") {
      alert("Please enter a todo!");
      return;
    }
  
    var todoText = todoInput.value;
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
      toggleTodoState(this);
    });
    
    var label = document.createElement("label");
    label.innerText = todoText;
    label.classList.add("checkbox-label");
  
    li.appendChild(checkbox);
    li.appendChild(label);
    todoList.appendChild(li);
  
    todoInput.value = "";
  }
  
  function toggleTodoState(checkbox) {
    var label = checkbox.nextElementSibling;
    if (checkbox.checked) {
      label.style.textDecoration = "line-through";
    } else {
      label.style.textDecoration = "none";
    }
  }
  