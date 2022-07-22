class Page {
  loadSearchForm() {
    /** Create and append search form */

    const searchForm = document.querySelector(".search-container");

    const form = `
        <form action="#" method="get">
            <input type="search" id="search-input" class="search-input" placeholder="Search...">
            <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
        </form>`;

    searchForm.insertAdjacentHTML("afterbegin", form);
  }

  createElement(empl) {
    const firstName = empl.name.first;
    const lastName = empl.name.last;
    const fullName = empl.name.full;
    const image = empl.image;

    const html = `
      <div class="card" id="${fullName}">
        <div class="card-img-container">
            <img class="card-img" src="${image}" alt="${firstName} ${lastName}'s profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="${firstName} ${lastName}" class="card-name cap">${firstName} ${lastName}</h3>
            <p class="card-text">${empl.email}</p>
            <p class="card-text cap">${empl.address.city}</p>
        </div>
      </div>
    `;
    return html;
  }
}
