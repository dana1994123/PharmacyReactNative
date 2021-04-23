import Drug from './Drug';
import User from './User';

export default class DrugReminderObj {
  constructor() {
    this.hour = 0;
    this.minutes = 0;
    this.pm = 'pm';
    this.drugName = '';
    this.description = '';
    this.days = [];
    this.repeat = false;
    this.userEmail = '';
  }
}
