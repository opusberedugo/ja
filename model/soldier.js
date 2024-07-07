class Soldier{
  constructor(fname, lname,dob, email, phone, pass){
    this.firstName = fname;
    this.lastName = lname;
    this.birthDay =dob;
    this.email = email;
    this.phoneNumber = phone;
    this.rank = "RECUIT";
    this.password= pass;

    for (let trait in this) {
      if (this[trait] === ' ' || mySoldier[trait] === "" ) {
          throw Error("Invalid Soldier Instance")
      }
    }
  }
}
module.exports.Soldier = Soldier;

