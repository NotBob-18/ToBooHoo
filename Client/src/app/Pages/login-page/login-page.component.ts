import { Component, forwardRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NG_VALUE_ACCESSOR } from '@angular/forms';




@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],

  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => LoginPageComponent),
    }
  ]
})


export class LoginPageComponent {

  constructor(private router: Router, private userService: UserService) {}

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    let user = {
      email: this.loginForm.value.email || '',
      password: this.loginForm.value.password|| ''
    };

    this.userService.login(user).subscribe((res: any) => {
      res
      this.router.navigate(['/landing']);
    });
   
  }
  

}
   



