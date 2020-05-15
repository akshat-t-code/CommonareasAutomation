class RandomString {
  generate_random_string(string_length) {
    let random_string = "";
    let random_ascii;
    let ascii_low = 65;
    let ascii_high = 90;
    for (let i = 0; i < string_length; i++) {
      random_ascii = Math.floor(
        Math.random() * (ascii_high - ascii_low) + ascii_low
      );
      random_string += String.fromCharCode(random_ascii);
    }
    return random_string;
  }

  getRandomUserEmail(domain = "mailinator.com") {
    return this.generate_random_string(10) + "@" + domain;
  }

  getRandomUser() {
    var lName = this.generate_random_string(5);
    return {
      Useremail: lName + "@mailinator.com",
      UserFirstName: this.generate_random_string(5),
      UserLastName: lName,
    };
  }

    getRandomPhoneNo() {
    return Math.floor(Math.random() * 9000000000) + 1000000000;
  }
}

export default RandomString;
