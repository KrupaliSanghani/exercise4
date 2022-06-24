import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  customerData = [];
  editArr = []

  constructor() { }

  addToService(data) {
    this.customerData.push(data);
    console.log(this.customerData);
  }

  getData() {
    return this.customerData;
  }


  getEdit() {
    console.log(this.editArr);
    return this.editArr;
  }

  editval(Data: any) {
    this.editArr.push(Data);
    console.log(this.editArr);
  }

}
