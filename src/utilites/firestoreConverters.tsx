// Firestore data converter
import User from '../models/User';
import PrescriptionOrder from '../models/PrescriptionOrder';

export const userConverter = {
  toFirestore: function (user: User) {
    return {
      fullName: user.fullName,
      email: user.email,
      password: user.pass,
      role: user.role,
    };
  },
  fromFirestore: function (data): User {
    return new User(data.fullName, data.email, data.password, data.role);
  },
};

export const orderConverter = {
  toFirestore: function (prescriptionOrder: PrescriptionOrder) {
    return {
      uid: prescriptionOrder.uid,
      pharmID: prescriptionOrder.pharmID,
      medName: prescriptionOrder.medName,
      quantity: prescriptionOrder.quantity,
      duration: prescriptionOrder.duration,
      renewable: prescriptionOrder.renewable,
    };
  },
  fromFirestore: function (data): PrescriptionOrder {
    return new PrescriptionOrder(
      data.uid,
      data.pharmID,
      data.medName,
      data.quantity,
      data.duration,
      data.renewable,
    );
  },
};
