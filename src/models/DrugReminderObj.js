import Drug from './Drug';

export default class DrugReminderObj {
  constructor() {
    this.hour = 4;
    this.minutes = 0;
    this.pm = 'pm';
    this.drugName = '';
    this.description = '';
    this.days = [];
    this.repeat = false;
  }
}
