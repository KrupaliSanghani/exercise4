import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-customer-display-data',
  templateUrl: './customer-display-data.component.html',
  styleUrls: ['./customer-display-data.component.css']
})
export class CustomerDisplayDataComponent implements OnInit {
  @Input() displayArr;
  @Output() newItemEvent = new EventEmitter<string>();
  displayActiveArr;
  displayStatusArr;
  status = true;

  constructor() { }

  ngOnInit(): void {

  }


  onActive() {
    this.status = false;
    console.log(this.displayArr);
    this.displayActiveArr = this.displayArr.filter(displayArr => displayArr.Status == 'Active');
    console.log(this.displayActiveArr);

  }

  onInactive() {
    this.status = false;
    console.log(this.displayArr);
    this.displayStatusArr = this.displayArr.filter(displayArr => displayArr.Status == 'Inactive');
    console.log(this.displayStatusArr);
  }


  onEdit(value) {
    console.log(this.newItemEvent);
    this.newItemEvent.emit(value);
  }





}
