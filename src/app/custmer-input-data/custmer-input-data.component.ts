import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';


@Component({
  selector: 'app-custmer-input-data',
  templateUrl: './custmer-input-data.component.html',
  styleUrls: ['./custmer-input-data.component.css']
})
export class CustmerInputDataComponent implements OnInit, AfterContentInit {
  @ContentChild('add')
  add: ElementRef;

  customerName = '';
  Name;
  customerEmail = '';
  customerAddress = '';

  nameError = 'Enter Name';
  emailError = 'Enter valid Email';


  validName = false;
  validEmail = false;
  validAddress = false;

  status = 'Active';
  statusArr = [];

  customerArr = [];

  constructor() { }

  ngOnInit(): void {
    this.statusArr = [
      { id: 1, name: "Active" },
      { id: 2, name: "Inactive" }
    ]
  }


  ngAfterContentInit(): void {
    console.log(this.add.nativeElement);

  }



  onSubmit() {

    if (this.customerName == '') {
      this.validName = true;
    }
    if (this.customerEmail == "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") {
      this.validEmail = true;
    }

    this.customerArr.push({ Name: this.customerName, Email: this.customerEmail, Status: this.status, Address: this.customerAddress });

    this.customerName = '';
    this.customerAddress = '';
    this.customerEmail = '';
  }


  addItem(val) {
    console.log(val);
    this.customerName = val;


    // this.customerEmail = '';
    // this.customerAddress = '';
  }







}
