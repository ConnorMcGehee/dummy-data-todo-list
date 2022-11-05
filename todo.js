// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
    {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    let ol = document.getElementById("todo-list");
    ol.innerHTML = "";
    let comListEl = document.getElementById("completed-list");
    comListEl.innerHTML = "";
    let incListEl = document.getElementById("incomplete-list");
    incListEl.innerHTML = "";

    for (let item of arrayOfTodos) {
        let li = document.createElement("li")
        li.innerHTML = item.title;

        ol.appendChild(li);
    }

    let filteredCompleted = arrayOfTodos.filter((todoItem) => todoItem.completed);
    for (let item of filteredCompleted) {

        let li = document.createElement("li")
        li.innerHTML = item.title;

        comListEl.appendChild(li);
    }

    let filteredIncomplete = arrayOfTodos.filter((todoItem) => !todoItem.completed);
    for (let item of filteredIncomplete) {

        let li = document.createElement("li")
        li.innerHTML = item.title;

        incListEl.appendChild(li);
    }
}

let filteredArray = [];
const filterTodosUserId = () => {
    let ol = document.getElementById("todo-list");
    ol.innerHTML = "";

    let userId = document.getElementById("userId").value;

    filteredArray = arrayOfTodos.filter((todoItem) => todoItem.userId === parseInt(userId));
    for (let item of filteredArray) {

        let li = document.createElement("li")
        li.innerHTML = item.title;

        ol.appendChild(li);
    }

    let comListEl = document.getElementById("completed-list");
    comListEl.innerHTML = "";

    filteredArray = arrayOfTodos.filter((todoItem) => todoItem.userId === parseInt(userId));
    let filteredCompleted = filteredArray.filter((todoItem) => todoItem.completed);
    for (let item of filteredCompleted) {

        let li = document.createElement("li")
        li.innerHTML = item.title;

        comListEl.appendChild(li);
    }

    let incListEl = document.getElementById("incomplete-list");
    incListEl.innerHTML = "";

    filteredArray = arrayOfTodos.filter((todoItem) => todoItem.userId === parseInt(userId));
    let filteredIncomplete = filteredArray.filter((todoItem) => !todoItem.completed);
    for (let item of filteredIncomplete) {

        let li = document.createElement("li")
        li.innerHTML = item.title;

        incListEl.appendChild(li);
    }
}