export default class PrescriptionOrder {
  uid: String;
  pharmID: String;
  medName: String;
  quantity: Number;
  duration: String;
  renewable: Boolean;

  constructor(
    uid: String,
    pharmID: String,
    medName: String,
    quantity: Number,
    duration: String,
    renewable: Boolean,
  ) {
    this.uid = uid;
    this.pharmID = pharmID;
    this.medName = medName;
    this.quantity = quantity;
    this.duration = duration;
    this.renewable = renewable;
  }
}
