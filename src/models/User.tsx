export default class User {
  fullName: String;
  email: String;
  pass: String;
  role: String;
  constructor(fullName: String, email: String, pass: String, role: String) {
    this.fullName = fullName;
    this.email = email;
    this.pass = pass;
    this.role = role;
  }
}
