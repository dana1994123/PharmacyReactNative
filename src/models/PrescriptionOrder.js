export default class PrescriptionOrder {
  constructor(name, quantity, duration, renewable) {
    (this.name = name),
      (this.quantity = quantity),
      (this.duration = duration),
      (this.renewable = renewable);
  }
}
