const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `
<li class="list-group-item d-flex justify-content-between border-dark">
<span>${todo}</span>
<i class="fa-regular fa-trash-can"></i>
`;

  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //trim - clearing space
  const todo = addForm.add.value.trim();

  //preventing empty list
  if (todo.length) {
    generateTemplate(todo);
    //clear the form
    addForm.reset();
  }
});

//event delegation - delate todos

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

//keyup event
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
