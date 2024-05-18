import { Component,NgModule } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  // ngIf
  isAuthenticated!: boolean;
  submitted = false;
  userName!: string;

  isHovered = false

  onHover(){
    this.isHovered = true
  }




  // password strength check
  minimumLength = 6;
  isPasswordShort = false;
  isPasswordWeak = false;
  isPasswordOk = false;
  isPasswordStrong = false;

  checkStrength(password: string): void {
    // const password = event.target.value;
    let score = 0;
    score += /[a-z]/.test(password) ? 1 : 0;
    score += /[A-Z]/.test(password) ? 1 : 0;
    score += /[0-9]/.test(password) ? 1 : 0;
    score += /[^a-zA-Z0-9]/.test(password) ? 1 : 0;

    this.isPasswordShort = password.length < this.minimumLength;
    this.isPasswordWeak = score <= 2 && password.length >= this.minimumLength;
    this.isPasswordOk = score === 3 && password.length >= this.minimumLength;
    this.isPasswordStrong = score > 3 && password.length >= this.minimumLength;
}

  onSubmit(name: string, password: string){
    console.log(name,password)
    this.submitted = true
    this.userName = name
    if((name === "admin" || name === "jatin") && password === "Hello@123"){
      this.isAuthenticated = true
      console.log("Authenticated")
    }else{
      this.isAuthenticated = false
      console.log("Sorry! Invalid creds")
    }
  }




















/*
  // ngFor
  courses: any[] = [
    {id:1,name:"C/C++"},
    {id:2,name:"Python"},
    {id:3,name:"Java"},
    {id:4,name:"Angular"}
  ]



  // ngSwitch
  choice = 0
  nextChoice(){
    console.log(this.choice)
    this.choice++
  }


  // ngStyle
  colorName = 'red'
  fontWeight = 'bold'
  borderStyle = '1px solid black'

  // ngClass
  isBodered = true

*/
}
