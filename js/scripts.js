////////////////////////////////////////////////////////////////////////////////
/** Get and display 12 random users */
const page = new Page();
page.loadSearchForm();

const users = "https://randomuser.me/api/?results=3&gender=male"; // remove male filter
const gallery = document.querySelector("#gallery");
const employees = [];

getJSON(users).then(displayUserInfo).then(addEventListeners);

// Fetch API
async function getJSON(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

// Map over each item and display on page
async function displayUserInfo(array) {
  await array.map((employee) => {
    // Store new employee object
    employees.push(employee);

    // Create html element
    const html = page.createElement(employee);

    // Append card to gallery
    gallery.insertAdjacentHTML("beforeend", html);
  });

  console.log(employees);
  return await array;
}

/** Create a modal window */

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

function loadModel(selection) {
  const select = employees.filter(
    (employee) => `${employee.name.first} ${employee.name.last}` === selection
  )[0]; // Note index 0

  console.log(select);

  const modal = new Modal(select);
  modal.log(modal.location.street);
}
