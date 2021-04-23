export default class User {
  fullName: String;
  email: String;
  pass: String;
  role: String;
  phoneNumber: Number;
  uid: String;
  address: String;
  profileURI: String;
  company: String;

  constructor(
    fullName: String,
    email: String,
    role: String,
    phoneNumber = null,
    uid = null,
    address = null,
    profileURI = null,
    company = null,
  ) {
    this.fullName = fullName;
    this.email = email;
    this.role = role;
    this.phoneNumber = phoneNumber;
    this.uid = uid;
    this.address = address;
    this.profileURI = profileURI;
    this.company = company;
  }
}
