// Class to define a Contact in the Address Book
class Contact {
  constructor(
    firstName,
    lastName,
    address,
    city,
    state,
    zip,
    phoneNumber,
    email
  ) {
    this.firstName = this.validateName(firstName, "First Name");
    this.lastName = this.validateName(lastName, "Last Name");
    this.address = this.validateMinLength(address, 4, "Address");
    this.city = this.validateMinLength(city, 4, "City");
    this.state = this.validateMinLength(state, 4, "State");
    this.zip = this.validateZip(zip);
    this.phoneNumber = this.validatePhone(phoneNumber);
    this.email = this.validateEmail(email);
  }

  //Validate first Name or Last Name
  validateName(name, fieldName) {
    const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
    if (!nameRegex.test(name)) {
      throw new Error(
        `${fieldName} must start with a capital letter and have at least 3 characters.`
      );
    }
    return name;
  }

  //Length Validate
  validateMinLength(value, minLength, fieldName) {
    if (value.length < minLength) {
      throw new Error(
        `${fieldName} must have at least ${minLength} characters.`
      );
    }
    return value;
  }

  //Zip Validate
  validateZip(zip) {
    const zipRegex = /^[1-9][0-9]{5}$/;
    if (!zipRegex.test(zip)) {
      throw new Error("Zip must be a 5-digit number.");
    }
    return zip;
  }

  //Phone No. Validate
  validatePhone(phoneNumber) {
    const phoneRegex = /^[6-9][0-9]{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
      throw new Error("Phone number must be in the format 123-456-7890.");
    }
    return phoneNumber;
  }

  //Email Validate
  validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format.");
    }
    return email;
  }

  // Method to display contact details
  display() {
    return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state} - ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
  }
}

// contact creation
let contact1 = new Contact(
  "Survesh",
  "Bajaj",
  "Sonagiri",
  "Bhopal",
  "Madhya Pradesh",
  "462022",
  "9876543210",
  "sarvesh@example.com"
);

console.log(contact1.display());
