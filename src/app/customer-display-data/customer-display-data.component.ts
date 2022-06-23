import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-customer-display-data',
  templateUrl: './customer-display-data.component.html',
  styleUrls: ['./customer-display-data.component.css']
})
export class CustomerDisplayDataComponent implements OnInit {
  @Input() displayArr = [];
  @Input() validEmail: boolean;
  @Output() editData = new EventEmitter();
  displayActiveArr = [];
  displayStatusArr = [];
  status = true;
  isDesc = false;

  // -----------for filter active and inactive------------
  isActive: boolean = false;
  isInactive: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  // ----------display active status-------
  onActive() {
    this.status = false;
    this.isActive = true;
    this.isInactive = false;
    console.log(this.displayArr);
    this.displayActiveArr = this.displayArr.filter(displayArr => displayArr.Status == 'Active');
    console.log(this.displayActiveArr);

  }

  // ----------display inactive status-------
  onInactive() {
    this.status = false;
    this.isActive = false;
    this.isInactive = true;
    console.log(this.displayArr);
    this.displayStatusArr = this.displayArr.filter(displayArr => displayArr.Status == 'Inactive');
    console.log(this.displayStatusArr);
  }

  // ------for Edit Data---------

  onEdit(value) {
    console.log(this.editData);
    this.editData.emit(value);
  }

  // ---------------sort by Name----------

  sortName(property: string | number) {
    this.isDesc = !this.isDesc;

    let direction = this.isDesc ? 1 : -1;
    this.displayArr.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  }

  // ---------------sort by EmaiL----------

  sortEmail(property: string | number) {
    this.isDesc = !this.isDesc;

    let direction = this.isDesc ? 1 : -1;
    this.displayArr.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  }

  // ---------------sort by Address----------

  sortAddress(property: string | number) {
    this.isDesc = !this.isDesc;

    let direction = this.isDesc ? 1 : -1;
    this.displayArr.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  }



}
