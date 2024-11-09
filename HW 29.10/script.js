class Task {
    constructor(name, time, cost) {
        this.name = name;
        this.time = time;
        this.cost = cost;
    }
}



function selectTasks(tasks, maxTime) {
    // Сортируем задачи по времени выполнения (от меньшего к большему)
    tasks.sort((a, b) => a.time - b.time);

    let selectedTasks = [];
    let currentTime = 0;

    // Идем по отсортированному списку задач и добавляем задачи, пока есть время
    for (let task of tasks) {
        if (currentTime + task.time <= maxTime) {
            selectedTasks.push(task);
            currentTime += task.time;
        } else {
            break; // Если нет времени на текущую задачу, выходим из цикла
        }
    }

    return selectedTasks;
}



// Создаем список задач
let tasks1 = [
    new Task("Task1", 3, 100),
    new Task("Task2", 2, 150),
    new Task("Task3", 1, 200),
    new Task("Task4", 5, 250),
    new Task("Task5", 4, 300)
];

// Максимальное доступное время в неделе (например, 7 дней)
let maxTime1 = 7;

// Выбираем задачи
let selectedTasks1 = selectTasks(tasks1, maxTime1);

// Выводим выбранные задачи
console.log("Selected tasks:");
for (let task1 of selectedTasks1) {
    console.log(`${task1.name} - Time: ${task1.time}, Cost: ${task1.cost}`);
}



class Task {
    constructor(name, time, cost) {
        this.name = name;
        this.time = time;
        this.cost = cost;
    }
}



function selectTasks(tasks, maxTime) {
    tasks.sort((a, b) => a.time - b.time);

    let selectedTasks = [];
    let currentTime = 0;

    for (let task of tasks) {
        if (currentTime + task.time <= maxTime) {
            selectedTasks.push(task);
            currentTime += task.time;
        } else {
            break;
        }
    }

    return selectedTasks;
}



let tasks = [
    new Task("Task1", 3, 100),
    new Task("Task2", 2, 150),
    new Task("Task3", 1, 200),
    new Task("Task4", 5, 250),
    new Task("Task5", 4, 300)
];

let maxTime = 7;

let selectedTasks = selectTasks(tasks, maxTime);

console.log("Selected tasks:");
for (let task of selectedTasks) {
    console.log(`${task.name} - Time: ${task.time}, Cost: ${task.cost}`);
}



