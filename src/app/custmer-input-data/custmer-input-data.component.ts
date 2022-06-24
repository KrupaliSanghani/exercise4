import { Component, OnInit, } from '@angular/core';
import { CustomerDataService } from '../customer-data.service';



@Component({
  selector: 'app-custmer-input-data',
  templateUrl: './custmer-input-data.component.html',
  styleUrls: ['./custmer-input-data.component.css']
})
export class CustmerInputDataComponent implements OnInit {

  // ------take inputs------------
  customerName: string = '';
  customerEmail: string = '';
  customerAddress: string = '';
  status: string = 'Active';
  statusArr: [{ id: number, name: string }, { id: number, name: string }] = [
    { id: 1, name: "Active" },
    { id: 2, name: "Inactive" }
  ];

  // -----display validation error---------
  nameError: string = 'Enter Name';
  emailError: string = 'Enter valid Email';

  validName: boolean = false;
  validEmail: boolean = true;
  validAddress: boolean = false;
  valid: string;


  // -------store customer data---------
  customerArr = [];
  getEditArr = [];


  // ------------take address value from another component----
  getAddress(val: string) {
    this.customerAddress = val;
  }


  constructor(private customerdata: CustomerDataService) { }

  ngOnInit(): void {
    // console.log(this.getEditArr);
    // console.log(this.getEditArr)
    // this.getEditArr = this.customerdata.getEdit();
    // this.customerName = this.getEditArr.Data
    // console.log();
  }

  // ----------check email validation-----------
  ckeckEmail() {
    this.valid = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if (this.customerEmail.match(this.valid)) {
      this.validEmail = true;

    }
    else {
      this.validEmail = false;

    }
  }



  // ------------submit customer data---------
  onSubmit() {

    // -----display validation error---------
    if (this.customerName == '') {
      this.validName = true;
    }

    // ----------check email validation-----------

    if (this.customerEmail.match(this.valid)) {

      // -----------pass customer data to customer display component------------
      // this.customerArr.push({ Name: this.customerName, Email: this.customerEmail, Status: this.status, Address: this.customerAddress });
      this.customerdata.addToService({ Name: this.customerName, Email: this.customerEmail, Status: this.status, Address: this.customerAddress });
    }

    // ---------for reset value-------
    this.customerName = '';
    this.customerEmail = '';
    this.customerAddress = '';
  }

  // ------for Edit Data---------

  editName(val) {
    console.log(val);
    this.customerName = val.Name;
    this.customerEmail = val.Email;
    this.customerAddress = val.Address;
    this.status = val.Status;
  }

}
