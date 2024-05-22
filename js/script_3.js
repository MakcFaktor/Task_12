document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText) {
      const newTask = document.createElement("li");
      newTask.classList.add("task");

      const taskContent = document.createElement("span");
      taskContent.textContent = taskText;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Видалити";
      deleteButton.classList.add("deleteButton");

      newTask.appendChild(taskContent);
      newTask.appendChild(deleteButton);
      taskList.appendChild(newTask);
      taskInput.value = "";
    }
  });

  taskList.addEventListener("click", function (event) {
    if (event.target && event.target.matches("button.deleteButton")) {
      event.target.parentElement.remove();
    }
  });
});
