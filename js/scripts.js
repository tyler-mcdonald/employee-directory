////////////////////////////////////////////////////////////////////////////////
/** Get and display 12 random users */
const page = new Page();
page.loadSearchForm();

const users = "https://randomuser.me/api/?results=3&gender=male"; // remove male filter
const gallery = document.querySelector("#gallery");
const searchForm = document.querySelector("#search-input");
const employees = [];

getJSON(users).then(createUsers).then(displayUsers).then(addEventListeners);

/** Fetch API */
async function getJSON(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

/** Create users */
async function createUsers(array) {
  const empls = await array.map((user) => {
    const empl = new Employee(user);
    employees.push(empl);
    return empl;
  });
  return await empls;
}

/** Display users */
async function displayUsers(array) {
  await array.map((empl) => {
    const html = page.createElement(empl);
    gallery.insertAdjacentHTML("beforeend", html);
  });
  return await array;
}

/** Clear previous users */
function removeUsers() {
  gallery.querySelectorAll(".card").forEach((card) => {
    card.remove();
  });
}

/** Add event listener to each user card */
function addEventListeners() {
  const cards = document.querySelectorAll(".card");
  let selection = null;
  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      selection = card.id;
      loadModel(selection);
    });
  });
}

/** Loads and displays modal interface */
// Refactor more of this into Employee.js
function loadModel(selection) {
  const empl = employees.filter((empl) => `${empl.name.full}` === selection)[0]; // Note index 0

  empl.displayModal();
  document.addEventListener("click", (e) => {
    const target = e.target;
    empl.closeModal(target);
  });
}

// Search form listener
searchForm.addEventListener("keyup", () => {
  const input = searchForm.value.toLowerCase();
  removeUsers();
  // console.log(employeeNames);
  filterFunction(input, employees);
});

/** Filter user input */
function filterFunction(input, employees) {
  const names = employees.filter((empl) => `${empl.name.full}`.includes(input));
  displayUsers(names);
}
