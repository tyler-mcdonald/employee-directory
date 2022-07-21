class Employee {
  constructor(image, firstName, lastName, email, city, state, country) {
    this.image = image;
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${this.firstName} ${this.lastName}`;
    this.email = email;
    this.city = city;
    this.state = state;
    this.country = country;
  }
}
