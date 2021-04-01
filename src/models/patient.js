import Prescription from './Prescription';
import Location from './Location';
import HealthInsurance from './HealthInsurance';
import FamilyDoctor from './FamilyDoctor';
import FamilyMember from './FamilyMember';
import DrugReminder from './DrugReminderObj';
import DOB from './DOB';
import Pharmacy from './Pharmacy';

export default class Patient {
  constructor() {
    this.fullName = 'John kamel';
    this.email = 'd@c.c';
    this.pass = '';
    this.confirmPass = '';
    this.dateOfBirth = new DOB();
    this.location = new Location();
    this.healthInsurance = new HealthInsurance();
    this.familyDoctor = new FamilyDoctor();
    this.familyMemberList = new FamilyMember();
    this.listOfPrescription = new Prescription();
    this.drugReminder = new DrugReminder();
    this.pharmacy = new Pharmacy();
  }
}
