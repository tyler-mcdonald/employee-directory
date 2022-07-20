/** Get and display 12 random users */
const users = "https://randomuser.me/api/?results=3&gender=male";
const gallery = document.querySelector("#gallery");

// Make a GET request to fetch API
// Parse data into js object
async function getJSON(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
  // displayUserInfo(data.results);
}

getJSON(users).then(displayUserInfo);

// Map over each item and display on page
// Refactor this into a Class???
async function displayUserInfo(array) {
  await array.map((user) => {
    // Store user info
    // prettier-ignore
    const employee = new Employee(
      user.picture.large,
      user.name.first,
      user.name.last,
      user.email,
      user.location.city,
      user.location.state,
      user.location.country);
    console.log(employee);

    // Create html element
    const html = employee.createElement();
    gallery.insertAdjacentHTML("beforeend", html);

    // Refactor
    gallery.querySelector(".card").addEventListener("click", (e) => {
      console.log(e.target);
    });
  });
}

/** Create and append search form */
(function () {
  const searchForm = document.querySelector(".search-container");

  const form = `<form action="#" method="get">
  <input type="search" id="search-input" class="search-input" placeholder="Search...">
  <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`;

  searchForm.insertAdjacentHTML("afterbegin", form);
})();

/** Create a modal window */
// On click user card

// Populate modal information with selected user
function createModal() {}
