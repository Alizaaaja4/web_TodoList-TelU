document.addEventListener("DOMContentLoaded", function() {
    const nextText = document.querySelector('.next p');

    function fadeIn(element, delay = 0) {
        setTimeout(() => {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }, delay);
    }

    // Initially set styles for animation
    nextText.style.opacity = 0;
    nextText.style.transform = 'translateY(20px)';

    // Apply animations
    fadeIn(nextText, 2000); 

    // Add click event to proceed
    nextText.addEventListener('click', function() {
        window.location.replace("main.html");
    });
});

window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form")
    const input = document.querySelector("#new-task-input")
    const list_element = document.querySelector("#tasks")

    // Fungsi untuk menyimpan tasks ke localStorage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll(".text").forEach(taskElement => {
            tasks.push(taskElement.value);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Fungsi untuk memuat tasks dari localStorage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        if (tasks) {
            tasks.forEach(task => addTask(task));
        }
    }

    // Fungsi untuk menambahkan task ke DOM
    function addTask(taskText) {
        const task_element = document.createElement("div")
        task_element.classList.add("task")

        const task_content_element = document.createElement("div")
        task_content_element.classList.add("content")

        task_element.appendChild(task_content_element)

        const task_input_element = document.createElement("input")
        task_input_element.classList.add("text")
        task_input_element.type = "text"
        task_input_element.value = taskText
        task_input_element.setAttribute("readonly", "readonly")

        task_content_element.appendChild(task_input_element)

        const task_actions_element = document.createElement("div")
        task_actions_element.classList.add("actions")

        const task_edit_element = document.createElement("button")
        task_edit_element.classList.add("edit")
        task_edit_element.innerHTML = "Edit"

        const task_delete_element = document.createElement("button")
        task_delete_element.classList.add("delete")
        task_delete_element.innerHTML = "Delete"

        task_actions_element.appendChild(task_edit_element)
        task_actions_element.appendChild(task_delete_element)

        task_element.appendChild(task_actions_element)

        list_element.appendChild(task_element)

        task_edit_element.addEventListener('click', () => {
            if (task_edit_element.innerText.toLowerCase() == "edit") {
                task_input_element.removeAttribute("readonly")
                task_input_element.focus()
                task_edit_element.innerText = "Save"
            } else {
                task_input_element.setAttribute("readonly", "readonly")
                task_edit_element.innerText = "Edit"
                saveTasks(); // Save after editing
            }
        })

        task_delete_element.addEventListener("click", () => {
            list_element.removeChild(task_element)
            saveTasks(); // Save after deleting
        })
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const task = input.value
        if (!task) {
            alert("Please fill out the task")
            return
        }

        addTask(task);
        saveTasks(); // Save tasks when a new task is added
        input.value = ""
    })

    loadTasks(); // Load tasks on page load
})


const foot = document.getElementById('mee')
foot.style.color = '#6D2932'
foot.style.textAlign = 'center'
foot.style.marginTop = '50px'
foot.style.fontWeight = '600'