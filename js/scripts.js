/** Get and display 12 random users */
const page = new Page();
page.loadSearchForm();

const gallery = document.querySelector("#gallery");
const searchForm = document.querySelector("#search-input");
const users = [];
let currentModal = null;

getJSON("https://randomuser.me/api/?results=12&gender=male")
  .then(createUsers)
  .then(displayUsers)
  .then(addEventListeners);

/** Fetch API */
async function getJSON(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

/** Create users */
async function createUsers(array) {
  const userObjs = await array.map((object) => {
    const user = new User(object);
    users.push(user);
    return user;
  });
  return await userObjs;
}

/** Display users */
async function displayUsers(array) {
  await array.map((user) => {
    const html = page.createElement(user);
    gallery.insertAdjacentHTML("beforeend", html);
  });
  return await array;
}

/** Add event listener to each user card */
function addEventListeners() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () => loadModal(card.id));
  });
}

/** Clear previous users */
function removeUsers() {
  gallery.querySelectorAll(".card").forEach((card) => card.remove());
}

/** Loads and displays modal interface */
function loadModal(selection) {
  const user = users.filter((user) => `${user.name.full}` === selection)[0]; // Note index 0
  currentModal = user;
  user.displayModal();

  // Event listener for close button
  document.addEventListener("click", (e) => {
    const target = e.target;
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector("#modal-close-btn");
    const closeBtnX = document.querySelector("#modal-close-btn strong");

    if (modal && (closeBtn === target || closeBtnX === target))
      user.closeModal();
  });
}

/** Search form listener */
searchForm.addEventListener("keyup", () => {
  const input = searchForm.value.toLowerCase();
  removeUsers();
  filterFunction(input, users);
});

/** Filter user input */
function filterFunction(input, users) {
  const names = users.filter((empl) => `${empl.name.full}`.includes(input));
  displayUsers(names);
  addEventListeners();
}

/** Change Modals */
function changeModals(target) {
  let index = users.indexOf(currentModal);
  const items = users.length;

  if (target.id === "modal-next" && index < items - 1) {
    index += 1;
  } else if (target.id === "modal-prev" && index > 0) {
    index -= 1;
  }

  currentModal = users[index];
  users[index].displayModal();
}
