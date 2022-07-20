/** Get and display 12 random users */
const users = "https://randomuser.me/api/?results=3&gender=male";
const gallery = document.querySelector("#gallery");

// Make a GET request to fetch API
// Parse data into js object
async function getJSON(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.results);
  displayUserInfo(data.results);
}

getJSON(users);

// Map over each item and display on page
// Refactor this into a Class???
function displayUserInfo(array) {
  array.map((user) => {
    // Store user info
    // Possible into object/array
    const image = user.picture.large;
    const firstName = user.name.first;
    const lastName = user.name.last;
    const email = user.email;
    const city = user.location.city;
    const state = user.location.state;
    const country = user.location.country;

    // Create html element
    const html = `
      <div class="card">
        <div class="card-img-container">
            <img class="card-img" src="${image}" alt="${firstName} ${lastName}'s profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="${firstName} ${lastName}" class="card-name cap">${firstName} ${lastName}</h3>
            <p class="card-text">${email}</p>
            <p class="card-text cap">${city}, ${state}, ${country}</p>
        </div>
      </div>
    `;
    gallery.insertAdjacentHTML("beforeend", html);
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
// document.querySelector(".card").addEventListener("click", (e) => {
//   console.log("log");
// });
// Populate modal information with selected user
function createModal() {}
