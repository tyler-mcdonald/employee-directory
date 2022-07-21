/** Get and display 12 random users */
const page = new Page();
page.loadSearchForm();

const users = "https://randomuser.me/api/?results=3&gender=male";
const gallery = document.querySelector("#gallery");
const employees = [];

// Make a GET request to fetch API
async function getJSON(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

getJSON(users).then(displayUserInfo).then(addEventListeners);

function newEmployee(object) {
  const employee = new Employee(
    object.picture.large,
    object.name.first,
    object.name.last,
    object.email,
    object.location.city,
    object.location.state,
    object.location.country
  );
  employees.push(employee);
  return employee;
}

// Map over each item and display on page
async function displayUserInfo(array) {
  await array.map((user) => {
    // Store new employee object
    const employee = newEmployee(user);

    // Create html element
    const html = page.createElement(employee);

    // Append card to gallery
    gallery.insertAdjacentHTML("beforeend", html);
  });

  return await array;
}

/** Create a modal window */
// On click user card
const modal = new Modal(employees);
modal.log();

// Populate modal information with selected user

/** EVENT LISTENERS */

//  Listener using cards
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

function loadModel(name) {
  console.log(name);
}
