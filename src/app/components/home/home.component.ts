import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../services/api-calls.service'

export interface xDATA {
  id: number
  firstName: string
  lastName: string
  emailID: string
  phoneNumber: number
  isPrimary: boolean
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {
  profileForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    emailID: new FormControl(''),
    phoneNumber: new FormControl(''),
    isPrimary: new FormControl('')

  });


  constructor(private api: ApiService, public fb: FormBuilder) { }
  xData: xDATA = null;




  formData() {
    this.api.getxDataResponse().subscribe(resp => {
      this.xData = { ...resp.body };
      this.profileForm.setValue({
        id: this.xData.id,
        firstName: this.xData.firstName,
        lastName: this.xData.lastName,
        emailID: this.xData.emailID,
        phoneNumber: this.xData.phoneNumber,
        isPrimary: this.xData.isPrimary
      });
    }),
      error => console.log(error);

  }

  clearData() {
    this.profileForm.setValue({
      id: '',
      firstName: '',
      lastName: '',
      emailID: '',
      phoneNumber: '',
      isPrimary: ''
    });
    this.xData = null;
  }
}