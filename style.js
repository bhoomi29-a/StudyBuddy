
// ===== Study Planner =====

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");

// Add new task
addTaskBtn.addEventListener("click", function () {

    const taskName = taskInput.value.trim();

    if (taskName === "") {
        alert("Please enter a task!");
        return;
    }

    const label = document.createElement("label");

    label.innerHTML = `
        <input type="checkbox">
        ${taskName}
    `;

    taskList.appendChild(label);

    taskInput.value = "";

    updateProgress();
});

// Check task
taskList.addEventListener("change", function (event) {

    if (event.target.type === "checkbox") {

        const label = event.target.parentElement;

        if (event.target.checked) {
            label.style.textDecoration = "line-through";
            label.style.opacity = "0.6";
        } else {
            label.style.textDecoration = "none";
            label.style.opacity = "1";
        }

        updateProgress();
    }
});

// Update progress
function updateProgress() {

    const checkboxes = taskList.querySelectorAll("input[type='checkbox']");

    const completed = taskList.querySelectorAll(
        "input[type='checkbox']:checked"
    ).length;

    const total = checkboxes.length;

    let progress = 0;

    if (total > 0) {
        progress = Math.round((completed / total) * 100);
    }

    progressText.textContent = progress + "%";
    progressFill.style.width = progress + "%";
}


// ===== Resource Buttons =====

const resourceButtons = document.querySelectorAll(".resource-card button");

resourceButtons.forEach(function(button) {

    button.addEventListener("click", function() {
        alert("Keep learning! 🚀");
    });

});


// ===== Contact Form =====

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you! Your message has been submitted. ❤️");

    form.reset();

});

// ===== Study Timer =====

let timeLeft = 25 * 60;
let timerInterval = null;

const timerDisplay = document.getElementById("timerDisplay");
const startTimer = document.getElementById("startTimer");
const pauseTimer = document.getElementById("pauseTimer");
const resetTimer = document.getElementById("resetTimer");

// Display time
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerDisplay.textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}

// Start timer
startTimer.addEventListener("click", function () {

    if (timerInterval !== null) {
        return;
    }

    timerInterval = setInterval(function () {

        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            timerInterval = null;
            alert("Study session complete! 🎉 Take a short break.");
        }

    }, 1000);
});

// Pause timer
pauseTimer.addEventListener("click", function () {

    clearInterval(timerInterval);
    timerInterval = null;
});

// Reset timer
resetTimer.addEventListener("click", function () {

    clearInterval(timerInterval);
    timerInterval = null;

    timeLeft = 25 * 60;
    updateTimerDisplay();
});

// Initial display
updateTimerDisplay();


// ===== Goals =====

const goalInput = document.getElementById("goalInput");
const addGoalBtn = document.getElementById("addGoalBtn");
const goalList = document.getElementById("goalList");

addGoalBtn.addEventListener("click", function () {

    const goalName = goalInput.value.trim();

    if (goalName === "") {
        alert("Please enter a goal!");
        return;
    }

    const label = document.createElement("label");

    label.innerHTML = `
        <input type="checkbox">
        ${goalName}
    `;

    goalList.appendChild(label);

    goalInput.value = "";
});

// Goal completion
goalList.addEventListener("change", function (event) {

    if (event.target.type === "checkbox") {

        const label = event.target.parentElement;

        if (event.target.checked) {
            label.style.textDecoration = "line-through";
            label.style.opacity = "0.6";
        } else {
            label.style.textDecoration = "none";
            label.style.opacity = "1";
        }
    }
});