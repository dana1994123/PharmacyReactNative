// Firestore data converter
import User from '../models/User';
import PrescriptionOrder from '../models/PrescriptionOrder';
import Patient from '../models/patient';

export const userConverter = {
  toFirestore: function (user: User) {
    return {
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    };
  },
  fromFirestore: function (uid, user): User {
    return new User(
      user.fullName,
      user.email,
      user.role,
      user.phoneNumber,
      uid,
    );
  },
};

// export const patientConverter = {
//   toFirestore: function (patient: Patient) {
//     return {
//       fullName: patient.user.fullName,
//       email: patient.user.email,
//       role: patient.user.role,
//       phoneNumber: patient.user.phoneNumber,
//       healthInsurance:patient.healthInsurance,
//       location: patient.location,
//       phlocation : patient.pharmacy.phlocation,
//       phEmail :patient.pharmacy.phEmail,
//       phaName : patient.pharmacy.phaName,
//       phphoneNumber : patient.pharmacy.phphoneNumber,

//         };
//   },
//   fromFirestore: function (email, patient): Patient {
//     return new Patient(
          //user.fullName,
//       patient.user.email,
//       patient.user.role,
//       patient.user.phoneNumber,
//       patient.healthInsurance,
//       patient.location,
//       patient.pharmacy.phlocation,
//      patient.pharmacy.phEmail,
//       patient.pharmacy.phaName,
//       patient.pharmacy.phphoneNumber,
      
//     );
//   },
// };

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
