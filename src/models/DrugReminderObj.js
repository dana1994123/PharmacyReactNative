import Drug from './Drug';
import User from './User';

export default class DrugReminderObj {
  constructor() {
    this.hour = 0;
    this.minutes = 0;
    this.pm = 'pm';
    this.drugName = 'Drug Name';
    this.description = 'Drug Description';
    this.days = [];
    this.repeat = false;
    this.userEmail = '';
  }
}
