import moment from "moment";
export default class Prescription {
  constructor() {
    this.date = moment().format("LL");
    //how to save the file as one property of the prescription
  }
}
