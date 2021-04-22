import moment from "moment";
import User from "./User";
export default class Prescription {
  constructor() {
    this.date = moment().format("LL");
    this.user = new User();
    this.pharNumber = 0;
    this.refillable = false;
    this.healthInsNum = 0;
    this.filePath = "";


    //how to save the file as one property of the prescription
  }
}
