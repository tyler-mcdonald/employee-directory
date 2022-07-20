class Employee {
  constructor(image, firstName, lastName, email, city, state, country) {
    this.image = image;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.city = city;
    this.state = state;
    this.country = country;
  }

  createElement() {
    const html = `
      <div class="card">
        <div class="card-img-container">
            <img class="card-img" src="${this.image}" alt="${this.firstName} ${this.lastName}'s profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="${this.firstName} ${this.lastName}" class="card-name cap">${this.firstName} ${this.lastName}</h3>
            <p class="card-text">${this.email}</p>
            <p class="card-text cap">${this.city}, ${this.state}, ${this.country}</p>
        </div>
      </div>
    `;
    return html;
  }
}
