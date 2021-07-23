const addForm = document.querySelector(".add");
const ul = document.querySelector(".todos");

const generateHtml = (todo) => {
    let html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `;
    ul.innerHTML += html;
};

//add todos
addForm.addEventListener("submit", event => {
    event.preventDefault();
    let todo = addForm.add.value.trim();
    // console.log(todo);
    if (todo.length) generateHtml(todo);

    addForm.reset();
});


//delete todos
ul.addEventListener('click', event => {
    if (event.target.tagName === "I")
        event.target.parentElement.remove();
});

//filter todo
const filterTodos = (text) => {
    // console.log(text);
    Array.from(ul.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(text))
        .forEach(todo => todo.classList.add("filtered"));

    Array.from(ul.children)
        .filter(todo => todo.textContent.toLowerCase().includes(text))
        .forEach(todo => todo.classList.remove("filtered"));
};

//keyup event
const search = document.querySelector(".search input");

search.addEventListener("keyup", event => {
    const text = search.value.trim().toLowerCase();
    filterTodos(text);
});

//edit code here