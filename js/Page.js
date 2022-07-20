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

  createElement(employee) {
    const html = `
      <div class="card">
        <div class="card-img-container">
            <img class="card-img" src="${employee.image}" alt="${employee.firstName} ${employee.lastName}'s profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="${employee.firstName} ${employee.lastName}" class="card-name cap">${employee.firstName} ${employee.lastName}</h3>
            <p class="card-text">${employee.email}</p>
            <p class="card-text cap">${employee.city}, ${employee.state}, ${employee.country}</p>
        </div>
      </div>
    `;
    return html;
  }
}
