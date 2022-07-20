/** Get and display 12 random users */
const page = new Page();
page.loadSearchForm();

const users = "https://randomuser.me/api/?results=3&gender=male";
const gallery = document.querySelector("#gallery");
const cards = document.querySelectorAll(".card");

// async function listeners(array) {
//   await array.forEach((item) => {
//     item.addEventListener("click", (e) => console.log(e.target));
//   });
// }

// listeners(cards);

// Make a GET request to fetch API
// Parse data into js object
async function getJSON(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

getJSON(users).then(displayUserInfo);

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

  return employee;
}

// Map over each item and display on page
async function displayUserInfo(array) {
  await array.map((user) => {
    // Store new employee object
    const employee = newEmployee(user);

    // Create html element
    const html = page.createElement(employee);

    gallery.insertAdjacentHTML("beforeend", html);

    // gallery.querySelectorAll(".card").addEventListener("click", (e) => {
    //   console.log(e.target);
    // });
  });

  return await array;
}

/** Create a modal window */
// On click user card

// Populate modal information with selected user
function createModal() {}

/** EVENT LISTENERS */
// Show modal window
gallery.addEventListener("click", (e) => {
  if (e.target.className !== "gallery") {
    console.log(e.target);
  }
});
