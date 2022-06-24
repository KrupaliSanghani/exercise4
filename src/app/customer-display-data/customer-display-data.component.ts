import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomerDataService } from '../customer-data.service';


@Component({
  selector: 'app-customer-display-data',
  templateUrl: './customer-display-data.component.html',
  styleUrls: ['./customer-display-data.component.css']
})
export class CustomerDisplayDataComponent implements OnInit {
  // @Input() displayArr = [];
  @Output() editData = new EventEmitter();
  displayArr = [];
  // editData;


  displayStatusArr = [];
  status = true;
  isDesc = false;




  // -----------for filter active and inactive------------
  isActive: boolean = false;
  isInactive: boolean = false;

  constructor(private customerdata: CustomerDataService) { }

  ngOnInit(): void {

    this.displayArr = this.customerdata.getData();
    console.log(this.displayArr);

  }

  // ----------display active status-------
  onActive() {
    this.status = false;
    this.isActive = true;
    this.isInactive = false;
    console.log(this.displayArr);
    this.displayStatusArr = this.displayArr.filter(displayArr => displayArr.Status == 'Active');


  }

  // ----------display inactive status-------
  onInactive() {
    this.status = false;
    this.isActive = false;
    this.isInactive = true;
    console.log(this.displayArr);
    this.displayStatusArr = this.displayArr.filter(displayArr => displayArr.Status == 'Inactive');

  }

  // ----------display all status-------
  onAll() {
    this.isActive = false;
    this.isInactive = false;
    this.status = true;
    console.log(this.displayArr);
  }

  // ------for Edit Data---------
  onEdit(data: any) {
    console.log(this.editData);
    // this.customerdata.editval(data);
    this.editData.emit(data);
  }

  // ---------------sorting----------

  sortName(property: string) {
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
