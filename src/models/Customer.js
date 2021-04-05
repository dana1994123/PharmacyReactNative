export default class Customer {
  constructor() {
    this.name = 'Name';
    this.healthCard = 'healthCard';
    this.date = 'date';
  }
  toString() {
    return this.name + ', ' + this.healthCard + ', ' + this.date;
  }
}
