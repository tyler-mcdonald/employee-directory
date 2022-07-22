class Employee {
  constructor(user) {
    this.image = user.picture.large;
    this.name = {
      first: user.name.first,
      last: user.name.last,
      full: `${user.name.first} ${user.name.last}`.toLowerCase(),
    };
    this.email = user.email;
    this.birthday = user.dob.date;
    this.phone = user.phone;
    this.address = {
      streetNumber: user.location.street.number,
      streetName: user.location.street.name,
      city: user.location.city,
      state: user.location.state,
      country: user.location.country,
      postcode: user.location.postcode,
    };
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

                    <p class="modal-text">(555) 555-5555</p>

                    <p class="modal-text">${this.address.streetNumber} ${this.address.streetName}, ${this.address.city}, ${this.address.state} ${this.address.postcode}</p>

                    <p class="modal-text">Birthday: DD/MM/YYYY</p>
                </div>
            </div>
    `;

    gallery.insertAdjacentHTML("beforebegin", html);
  }

  closeModal(target) {
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector("#modal-close-btn");
    const closeBtnX = document.querySelector("#modal-close-btn strong");
    const modalContainer = document.querySelector(".modal-container");
    if (modal && (closeBtn === target || closeBtnX === target)) {
      modalContainer.remove();
    }
  }
}
