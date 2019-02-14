import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../services/api-calls.service'

export interface xDATA {
  firstName: string
  lastName: string
  emailID: string
  phoneNumber: number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    emailID: new FormControl(''),
    phoneNumber: new FormControl(''),
  });
  constructor(private api: ApiService, public fb: FormBuilder) { }
  xData: xDATA;


  formData() {
    this.api.getxDataResponse().subscribe(resp => {
      this.xData = { ...resp.body };
      this.profileForm.setValue({
        firstName: this.xData.firstName,
        lastName: this.xData.lastName,
        emailID: this.xData.emailID,
        phoneNumber: this.xData.phoneNumber
      });
    }),
      error => console.log(error);
  }
}