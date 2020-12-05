const form = document.forms["todo"];
const ul = document.querySelector("ul");
const taskInfo = document.querySelector(".task-info");

function addTask(e) {
    e.preventDefault();
    // Get user input
    const inputTask = document.getElementById("task");
    const newTask = inputTask;
    // Prompt User to enter a task
    if(inputTask.value == "") {
        newTask.value = "please enter task";
    }
    // Create elements into the DOM
    const li = document.createElement("li");
    const checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    checkbox.className = "tick"
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.classList.add("task-del");
    button.textContent = "q";
    // Get user input and set it to the span
    span.textContent = inputTask.value;
    // Append child to li
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
    // Append li to ul
    ul.appendChild(li);
    
}

function taskDeleter(e) {
    if(e.target.className == "task-del") {
        const li = e.target.parentElement;
        ul.removeChild(li);
    }
}

function completed(e) {
    if(e.target.checked) {
        const li = e.target.parentElement;
        li.style.textDecoration = "line-through";
    } else {
        const li = e.target.parentElement;
        li.style.textDecoration = "none";
    }
}

form.addEventListener("submit", addTask);
ul.addEventListener("click", taskDeleter);
ul.addEventListener("click", completed);
taskInfo.onclick = e => {
    // Created an array to push the checked checkboxes;
    const boxes = [];
    // Get all chekboxes
    const checkbox = document.querySelectorAll(".tick");
    // loop through each checkboxes and push to the boxes array
    checkbox.forEach(box => {
        boxes.push(box);
    });
    // Check if the complete button is clicked
    if(e.target.className == "complete") {
        //Loop through each checkboxes to see if it's in a checked state
        boxes.forEach(box => {
            // they are in checked state
            if(box.checked) {
                let li = box.parentElement;
                // Display them
              return  li.style.display = "block";
              // They are not in checked state
            } else if(!box.checked) {
                let li = box.parentElement;
                // Do not display them
               return li.style.display = "none";
            }
        })
      // Check if all button is clicked
    } else if(e.target.className == "all") {
        //Loop through each boxes whether in checked state or not
        boxes.forEach(box => {
            let li = box.parentElement;
            // Display them
           return li.style.display = "block";
        });
        // Check if clear completed is clicked
      } else if(e.target.className == "clear") {
          boxes.forEach(box => {
              if(box.checked) {
                  let li = box.parentElement;
                 return ul.removeChild(li);
              }
          });
        }
};

// Drag and Drop tasks


