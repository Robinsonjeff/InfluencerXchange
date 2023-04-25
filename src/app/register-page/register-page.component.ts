import { Component } from '@angular/core';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  firstName:string = '';
  lastName:string = '';
  userName:string = '';
  password:string = '';
  phoneNumber:string = '';
  email:string = '';
  age:number = 0;
  accountType:string = '';

  
  

  onSubmit(){
    console.log("Submited")
  }

  formSubmit(firstName:string,lastName:string,userName:string,password:string,phoneNumber:string,email:string,age:string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.age = parseInt(age);
    this.accountType = this.selectedAccountTypeValue;
    console.log(this.accountType);

  }

  get selectedAccountTypeValue() {
    return this.accountType.valueOf();
  }
}
