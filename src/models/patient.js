import Prescription from './Prescription';
import Location from './Location';
import HealthInsurance from './HealthInsurance';
import FamilyDoctor from './FamilyDoctor';
import FamilyMember from './FamilyMember';
import DrugReminder from './DrugReminderObj';
import DOB from './DOB';
import Pharmacy from './Pharmacy';
import User from './User';
import defaultProfile from '../../assets/images/default.png';
import {Image} from 'react-native';

export default class Patient {
  constructor() {
    this.dateOfBirth = new DOB();
    this.location = 'Oakville, ON';
    this.healthInsurance = '';
    this.pharmacy = new Pharmacy();
    this.user = new User();
    this.picUri = Image.resolveAssetSource(defaultProfile).uri;
  }
}
