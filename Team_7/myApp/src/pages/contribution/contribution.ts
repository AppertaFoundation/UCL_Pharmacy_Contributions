import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';

/*
  Generated class for the Contribution page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

class Contribution {
  name: string
  date: string
  pantientInitials: string
  dateOfAdmission: string
  ward: string
  type: string[]
  speciality: string[]
	whereId : string[]
  specification1: string 
  prescriber: string[]
  prescriptionType: string[]
  specification2: string
  drug: string
  stage: string[]
  problem: string[]
  specification3: string
  action: string[] 
  outcome: string[]
  specification4: string 
  significance: string[]
  specification5: string

	constructor() {}
}

@Component({
  selector: 'page-contribution',
  templateUrl: 'contribution.html'
})

export class ContributionPage {

  contribution: Contribution = new Contribution()
  constructor(public navCtrl: NavController, public af: AngularFire) {}


  options = [
    {name:'Ward Visit', value:'Ward Visit', checked:false},
    {name:'Ward Road', value:'Ward Road', checked:false},
    {name:'Outpatient Clinic', value:'Outpatient Clinic', checked:false},
    {name:'Dispensary', value:'Ward Visit', checked:false},
    {name:'Aseptics', value:'Ward Visit', checked:false},
    {name:'On Call', value:'Ward Visit', checked:false}
  ]

  options1 = [
    {name:'Error / Intervention', value:'Error / Intervention', checked:false},
    {name:'Response to an Enquiry', value:'Response to an Enquiry', checked:false},
    
  ]

  options2 = [
    {name:'Nurse', value:'Nurse', checked:false},
    {name:'Pharmacist', value:'Pharmacist', checked:false},
    {name:'F1 / F2', value:'F1 / F2', checked:false},
    {name:'ST 1-6 / SqR / JCF', value:'ST 1-6 / SqR / JCF', checked:false},
    {name:'Consultant', value:'Consultant', checked:false},
    {name:'Other Dr / Unknown Dr', value:'Other Dr / Unknown Dr', checked:false},
    {name:'Other', value:'Other', checked:false},
  ]

  options3 = [
    {name:'Inpatient', value:'Inpatient', checked:false},
    {name:'Outpatient', value:'Outpatient', checked:false},
    {name:'TTO', value:'TTO', checked:false},
    {name:'TPN', value:'TPN', checked:false},
    {name:'Chemotherapy', value:'Chemotherapy', checked:false},
    {name:'Primary Care', value:'Primary Care', checked:false},
    {name:'Shared Care', value:'Shared Care', checked:false},
    {name:'Other', value:'Other', checked:false},
  ]

  options4 = [
    {name:'Drug History / Med Rec', value:'Drug History / Med Rec', checked:false},
    {name:'Prescribing', value:'Prescribing', checked:false},
    {name:'Dispensing / Supply', value:'Dispensing / Supply', checked:false},
    {name:'Administration', value:'Administration', checked:false},
    {name:'Transcribing', value:'Transcribing', checked:false},
    {name:'Monitoring', value:'Monitoring', checked:false},
    {name:'Counsling', value:'Counsling', checked:false},
    {name:'Other', value:'Other', checked:false},
  ]

  options5 = [
    {name:'Illegible, ambiguous prescription', value:'Illegible, ambiguous prescription', checked:false},
    {name:'Illegal – undated / unsigned / incomplete Prescription / CD regulations', value:'Illegal – undated / unsigned / incomplete Prescription / CD regulations', checked:false},
    {name:'Omission of drug', value:'Omission of drug', checked:false},
    {name:'Choice of drug / Wrong drug', value:'Choice of drug / Wrong drug', checked:false},
    {name:'Need for drug', value:'Need for drug', checked:false},
    {name:'Wrong dose, wrong frequency', value:'Wrong dose and frequency', checked:false},
    {name:'Wrong dose, correct frequency', value:'Wrong dose, correct frequency', checked:false},
    {name:'Administration - Selection or choice of appropriate drug / formulation / strength', value:'Administration - Selection or choice of appropriate drug / formulation / strength', checked:false},
    {name:'Administration - Selection or choice of duration of therapy or route', value: 'Administration - Selection or choice of duration of therapy or route', checked:false},
    {name:'Duration of therapy, e.g. where there is or should be a defined course length', value:'Duration of therapy, e.g. where there is or should be a defined course length', checked:false},
    {name:'Recommending a blood test or drug level (TDM)', value:'Recommending a blood test or drug level (TDM)', checked:false},
    {name:'Drug preparation/ IV compatibility', value:'Drug preparation/ IV compatibility', checked:false},
    {name:'Allergy Documentation', value:'Allergy Documentation', checked:false},
    {name:'Identification, Avoidance or Impact minimisation of a drug interaction', value:'Identification, Avoidance or Impact minimisation of a drug interaction', checked:false},
    {name:'Identification, Avoidance or Impact minimisation of  an ADR or Side Effect', value:'Identification, Avoidance or Impact minimisation of  an ADR or Side Effect', checked:false},
    {name:'Drug supply / Storage', value:'Drug supply / Storage', checked:false},
    {name:'Omitted dose', value:'Omitted dose', checked:false},
    {name:'Request for other drug information / Specialist input', value:'Request for other drug information / Specialist input', checked:false},
    {name:'Nutrition', value:'Nutrition', checked:false},
    {name:'Patient advice / Education / Counselling', value:'Patient advice / Education / Counselling', checked:false},
    {name:'Duplicate prescribing', value:'Duplicate prescribing', checked:false},
    {name:'Therapeutic substitution / Formulary / Policy compliance', value:'Therapeutic substitution / Formulary / Policy compliance', checked:false},
  ]

  options6 = [
    {name:'Discussed with prescriber', value:'Discussed with prescriber', checked:false},
    {name:'Problem solved by pharm staff alone', value:'Problem solved by pharm staff alone', checked:false},
    {name:'Entry in notes', value:'Entry in notes', checked:false},
    {name:'AI form completed', value:'AI form completed', checked:false},
  ]

  options7 = [
    {name:'No outcome yet / Outcome unknown', value:'No outcome yet / Outcome unknown', checked:false},
    {name:'Prescription cancelled', value:'Prescription cancelled', checked:false},
    {name:'New prescription started', value:'New prescription started', checked:false},
    {name:'Prescription cancelled and new prescription started', value:'Prescription cancelled and new prescription started', checked:false},
    {name:'Prescription clarified', value:'Prescription clarified', checked:false},
    {name:'No change, response to query', value:'No change, response to query', checked:false},
    {name:'Information given, NOT in response to a query', value:'Information given, NOT in response to a query', checked:false},
    {name:'No change needed / problem not pursued', value:'No change needed / problem not pursued', checked:false},
    {name:'No change and pharmacist disagrees', value:'No change and pharmacist disagrees', checked:false},

  ]

  options8 = [
    {name:'0', value:'0', checked:false},
    {name:'1', value:'1', checked:false},
    {name:'2', value:'2', checked:false},
    {name:'3', value:'3', checked:false},
    {name:'4', value:'4', checked:false},
    {name:'5', value:'5', checked:false},
  ]

  options9 = [
    {name:'Medicine', value:'Medicine', checked:false},
    {name:'Surgery', value:'Surgery', checked:false},
    {name:'Chemotherapy', value:'Chemotherapy', checked:false},
    {name:'Women and Children', value:'Wommen and Children', checked:false},
    {name:'Critical Care', value:'Critical Care', checked:false},
    {name:'Clinical Trials', value:'Clinical Trials', checked:false},
  ]

  get selectedOptions() { 
    return this.options
              .filter(opt => opt.checked)
              .map(opt => opt.value)
  }

  get selectedOptions1() { 
    return this.options1
              .filter(opt => opt.checked)
              .map(opt => opt.value)
  }

  get selectedOptions2() { 
    return this.options2
              .filter(opt => opt.checked)
              .map(opt => opt.value)
  }

  get selectedOptions3() { 
    return this.options3
              .filter(opt => opt.checked)
              .map(opt => opt.value)
  }

  get selectedOptions4() { 
    return this.options4
              .filter(opt => opt.checked)
              .map(opt => opt.value)
  }

  get selectedOptions5() { 
    return this.options5
              .filter(opt => opt.checked)
              .map(opt => opt.value)
  }

  get selectedOptions6() { 
    return this.options6
              .filter(opt => opt.checked)
              .map(opt => opt.value)
  }

  get selectedOptions7() { 
    return this.options7
              .filter(opt => opt.checked)
              .map(opt => opt.value)
  }

  get selectedOptions8() { 
    return this.options8
              .filter(opt => opt.checked)
              .map(opt => opt.value)
  }

   get selectedOptions9() { 
    return this.options9
              .filter(opt => opt.checked)
              .map(opt => opt.value)
  }


  submit() {
    this.contribution.outcome = this.selectedOptions7
    this.contribution.significance = this.selectedOptions8
    this.contribution.action = this.selectedOptions6
    this.contribution.problem = this.selectedOptions5
    this.contribution.stage = this.selectedOptions4 
    this.contribution.prescriptionType = this.selectedOptions3
    this.contribution.prescriber = this.selectedOptions2
    this.contribution.type = this.selectedOptions1
    this.contribution.speciality = this.selectedOptions9 
    this.contribution.whereId = this.selectedOptions
    this.af.database.list('/contributions').push(this.contribution)
    this.contribution = new Contribution()
    this.navCtrl.parent.select(0)
  }

}
