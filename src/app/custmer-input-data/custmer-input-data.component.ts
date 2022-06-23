import { Component, OnInit, } from '@angular/core';



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
  statusArr: [{ id: number, name: string }, { id: number, name: string }];

  // -----display validation error---------
  nameError: string = 'Enter Name';
  emailError: string = 'Enter valid Email';


  validName: boolean = false;
  validEmail: boolean = false;
  validAddress: boolean = false;
  valid: string;


  // -------store customer data---------
  customerArr = [];


  // ------------take address value from another component----
  getAddress(val: string) {
    this.customerAddress = val;
  }


  constructor() { }

  ngOnInit(): void {

    // -------status dropdown----------
    this.statusArr = [
      { id: 1, name: "Active" },
      { id: 2, name: "Inactive" }
    ]
  }

  // ------------submit customer data---------
  onSubmit() {

    // -----display validation error---------
    if (this.customerName == '') {
      this.validName = true;
    }

    this.valid = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if (this.customerEmail.match(this.valid)) {
      this.validEmail = false;
    }
    else {
      this.validEmail = true;
    }

    // -----------pass customer data to customer display component------------
    this.customerArr.push({ Name: this.customerName, Email: this.customerEmail, Status: this.status, Address: this.customerAddress });

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
