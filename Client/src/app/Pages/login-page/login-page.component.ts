import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';




@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  
  ngOnInit(): void {
    this.login();
  
  } 
  
 constructor (private users: UserService, private router: Router) {}

 form: FormGroup = new FormGroup({
  email: new FormControl(''),
  password: new FormControl(''),
  
})

login(){

  this.users.signIn(this.form.value).subscribe((res:any)=> {
    console.log(res);
    this.router.navigate(['/dashboard']);
  })
}

  

}
   



