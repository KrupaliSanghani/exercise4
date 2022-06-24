
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})

export class AddressComponent implements OnInit {

  // -------for empty address feild-----
  @Input() nullAddress: string;

  // --------pass address value--------
  @Output() add = new EventEmitter<string>();

  // ----------Placeholder------
  customerAddress: string = 'Enter Address';


  ngOnInit(): void {

  }

  // --------pass address value--------

  getAddress(AddressVal: string) {
    this.add.emit(AddressVal);
    // console.log(this.customerAddress);
  }


}


