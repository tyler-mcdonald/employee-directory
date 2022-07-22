/** Get and display 12 random users */
const page = new Page();
page.loadSearchForm();

const users = "https://randomuser.me/api/?results=12&gender=male"; // remove male filter
const gallery = document.querySelector("#gallery");
const searchForm = document.querySelector("#search-input");
const employees = [];
let currentModal = null;

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
  cards.forEach((card) => {
    card.addEventListener("click", () => loadModal(card.id));
  });
}

/** Loads and displays modal interface */
function loadModal(selection) {
  const empl = employees.filter((empl) => `${empl.name.full}` === selection)[0]; // Note index 0

  empl.displayModal();

  currentModal = empl;

  document.addEventListener("click", (e) => {
    const target = e.target;
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector("#modal-close-btn");
    const closeBtnX = document.querySelector("#modal-close-btn strong");

    if (modal && (closeBtn === target || closeBtnX === target))
      empl.closeModal();
  });
}

/** Search form listener */
searchForm.addEventListener("keyup", () => {
  const input = searchForm.value.toLowerCase();
  removeUsers();
  filterFunction(input, employees);
});

/** Filter user input */
function filterFunction(input, employees) {
  const names = employees.filter((empl) => `${empl.name.full}`.includes(input));
  displayUsers(names);
  addEventListeners();
}

/** Change Modals */
function changeModals(target) {
  let index = employees.indexOf(currentModal);
  const items = employees.length;

  if (target.id === "next-modal" && index < items - 1) {
    index += 1;
  } else if (target.id === "previous-modal" && index > 0) {
    index -= 1;
  }

  currentModal = employees[index];
  employees[index].displayModal();
}
