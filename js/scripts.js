/** Get and display 12 random users */
const page = new Page();
page.loadSearchForm();
const gallery = document.querySelector("#gallery");
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

/**
 * Creates users from json data results
 * @param {array} data
 * @returns array of user objects
 */
function createUsers(data) {
  const userObjs = data.map((object) => {
    const user = new User(object);
    users.push(user);
    return user;
  });
  return userObjs;
}

/**
 * Display users on the page
 * @param {array} array - array of user objects
 */
function displayUsers(array) {
  array.map((user) => {
    const html = page.createElement(user);
    gallery.insertAdjacentHTML("beforeend", html);
  });
}

/** Event listeners for user cards */
function addEventListeners() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () => loadModal(card.id));
  });
}

function removeUsers() {
  gallery.querySelectorAll(".card").forEach((card) => card.remove());
}

/**
 * Load and display modal interface
 * @param {object} selection the selected user's card DOM object
 */
function loadModal(selection) {
  const user = users.filter((user) => `${user.name.full}` === selection)[0]; // Note index 0
  currentModal = user;
  user.displayModal();
}

/**
 * Filter search input
 * @param {string} input search box input
 * @param {array} users array of user objects
 */
function filterFunction(input, users) {
  const names = users.filter((user) => `${user.name.full}`.includes(input));
  displayUsers(names);
  addEventListeners();
}

/**
 * Display the next or previous user's modal
 * @param {object} target the event target
 */
function changeModals(target) {
  let index = users.indexOf(currentModal);
  const items = users.length;

  if (target.id === "modal-next" && index < items - 1) index += 1;
  else if (target.id === "modal-prev" && index > 0) index -= 1;

  currentModal = users[index];
  users[index].displayModal();
}
