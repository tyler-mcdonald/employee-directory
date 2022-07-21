class Modal {
  constructor(object) {
    this.image = object.picture.large;
    this.firstName = object.name.first;
    this.lastName = object.name.last;
    this.fullName = `${this.firstName} ${this.lastName}`;
    this.email = object.email;
    this.birthday = object.dob.date;

    this.address = {
      streetNumber: object.location.street.number,
      streetName: object.location.steet.name,
      city: object.location.city,
      state: object.location.state,
      country: object.location.country,
      postCode: object.location.postcode,
    };
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
                    <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">

                    <h3 id="name" class="modal-name cap">name</h3>

                    <p class="modal-text">email</p>

                    <p class="modal-text cap">city</p>

                    <hr>

                    <p class="modal-text">(555) 555-5555</p>

                    <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>

                    <p class="modal-text">Birthday: 10/21/2015</p>
                </div>
            </div>
    `;
  }
}
