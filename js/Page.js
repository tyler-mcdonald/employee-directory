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
}
