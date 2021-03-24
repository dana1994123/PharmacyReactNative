import Drug from "./Drug";

export default class DrugReminderObj {
  constructor() {
    this.drug = new Drug();
    this.startDate = "20-12-21";
    this.endDate = "20-12-23";
    this.time = "12:00";
  }
}
