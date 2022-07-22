class User {
  constructor(user) {
    this.image = user.picture.large;
    this.name = {
      first: user.name.first,
      last: user.name.last,
      full: `${user.name.first} ${user.name.last}`.toLowerCase(),
    };
    this.email = user.email;
    this.dob = user.dob.date;
    this.unformattedPhone = user.phone;
    this.address = {
      streetNumber: user.location.street.number,
      streetName: user.location.street.name,
      city: user.location.city,
      state: user.location.state,
      country: user.location.country,
      postcode: user.location.postcode,
    };
  }

  get phone() {
    const clean = this.unformattedPhone.replaceAll(/[^A-Za-z0-9]+/g, "");
    const p1 = clean.slice(0, 3);
    const p2 = clean.slice(3, 6);
    const p3 = clean.slice(6);
    const formatted = `(${p1}) ${p2}-${p3}`;
    return formatted;
  }

  get birthday() {
    const year = this.dob.slice(0, 4);
    const month = this.dob.slice(5, 7);
    const day = this.dob.slice(8, 10);
    return `${month}/${day}/${year}`;
  }

  displayModal() {
    const html = `
      <div class="modal-container">
          <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>

            <div class="modal-info-container">
                <img class="modal-img" src="${this.image}" alt="${this.name.full}'sprofile picture">
                <h3 id="${this.name.full}" class="modal-name cap">${this.name.full}</h3>
                <p class="modal-text">${this.email}</p>
                <p class="modal-text cap">${this.address.city}</p>
                <hr>
                <p class="modal-text">${this.phone}</p>
                <p class="modal-text">${this.address.streetNumber} ${this.address.streetName}, ${this.address.city}, ${this.address.state} ${this.address.postcode}</p>
                <p class="modal-text">Birthday: ${this.birthday}</p>
            </div>
            
            <div class="modal-btn-container">
              <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
              <button type="button" id="modal-next" class="modal-next btn">Next</button>
            </div>
          </div>
      `;

    gallery.insertAdjacentHTML("beforebegin", html);

    /** Event listeners for prev/next buttons */
    document.querySelector("#modal-prev").addEventListener("click", (e) => {
      this.closeModal();
      changeModals(e.target);
    });

    document.querySelector("#modal-next").addEventListener("click", (e) => {
      this.closeModal();
      changeModals(e.target);
    });
  }

  closeModal() {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.remove();
  }
}
