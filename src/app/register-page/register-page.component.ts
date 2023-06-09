import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
  progressValue:number = 0;
  filledInputs:number = 0;
  inputs: string[] = [];

  
  constructor(private sharedService: SharedService,private snackBar: MatSnackBar,
    private router: Router) {}
  
    onInputChange(input:string){
      
      const numOfInputs = 8;
      if (this.inputs.includes(input) == false){
        this.filledInputs+= 1;
        this.inputs.push(input); 
      }
    
      this.progressValue = (this.filledInputs/numOfInputs) *100;
 
     }
  updateAccountType($event: { value: string; }){
    this.accountType = $event.value;
    this.onInputChange('accountType');
  }
  
  goToLogin(){
    this.router.navigate([""]);
  }
  onSubmit(){
    console.log("Submited")
  }

  formSubmit(firstName:string,lastName:string,userName:string,password:string,phoneNumber:string,email:string,age:string,accountType:string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.age = parseInt(age);

    const registerRes = this.sharedService.register({username:userName,password:password,phoneNumber,accountType:this.accountType,firstName,lastName,email,age:this.age}).subscribe(
      (response:any) => {
        this.router.navigate(['/login']);
        this.snackBar.open(
          `Account created successfully`,
          'Close',
          {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          }
        );
      },(error) => {
        this.snackBar.open(
          `Error during registration: ${error.message}`,
          'Close',
          {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          }
        );
      }
    )

   



  }

}
