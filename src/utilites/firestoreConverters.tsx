// Firestore data converter
import User from '../models/User';
export const userConverter = {
  toFirestore: function (user: User) {
    return {
      fullName: user.fullName,
      email: user.email,
      password: user.pass,
      role: user.role,
    };
  },
  fromFirestore: function (data) {
    return new User(data.fullName, data.email, data.password, data.role);
  },
};
