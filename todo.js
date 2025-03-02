const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value;
    if (taskText === "") {
        alert("Veuillez entrer une tâche.");
        return;
    }
    
    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    
    // ❌ BUG : L'élément n'est pas ajouté à la liste
    // Solution attendue : taskList.appendChild(listItem);
    console.log("Nouvelle tâche ajoutée :", taskText); 

    taskInput.value = ""; }


addTaskButton.addEventListener("click", addTask);