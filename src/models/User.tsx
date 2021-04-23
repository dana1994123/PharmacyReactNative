export default class User {
  fullName: String;
  email: String;
  pass: String;
  role: String;
  phoneNumber: Number;
  uid: String;
  constructor(
    fullName: String,
    email: String,
    role: String,
    phoneNumber = null,
    uid = null,
  ) {
    this.fullName = fullName;
    this.email = email;
    this.role = role;
    this.phoneNumber = phoneNumber;
    this.uid = uid;
  }
}
