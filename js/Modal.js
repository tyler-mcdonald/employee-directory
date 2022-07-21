class Modal {
  constructor(object) {
    this.image = object.picture.large;
    this.firstName = object.name.first;
    this.lastName = object.name.last;
    this.fullName = `${this.firstName} ${this.lastName}`;
    this.email = object.email;
    this.birthday = object.dob.date;
    this.phone = object.phone;

    this.address = {
      streetNumber: object.location.street.number,
      streetName: object.location.street.name,
      city: object.location.city,
      state: object.location.state,
      country: object.location.country,
      postcode: object.location.postcode,
    };
  }

  phone() {
    // reformat phone
    // might have to redo function
  }

  log(x) {
    console.log(x);
  }

  displayModal() {
    const html = `
        <div class="modal-container">
            <div class="modal">
                
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>

                <div class="modal-info-container">
                    <img class="modal-img" src="${this.image}" alt="${this.fullName}'sprofile picture">

                    <h3 id="${this.fullName}" class="modal-name cap">${this.fullName}</h3>

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

  closeModel(target) {
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector("#modal-close-btn");
    const closeBtnX = document.querySelector("#modal-close-btn strong");
    const modalContainer = document.querySelector(".modal-container");
    if (modal && (closeBtn === target || closeBtnX === target)) {
      modalContainer.remove();
    }
  }
}
