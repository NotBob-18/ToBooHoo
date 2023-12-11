import { Component,  forwardRef } from '@angular/core';
import { User } from 'src/app/Interfaces/users';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router'
import { NG_VALUE_ACCESSOR } from '@angular/forms';



@Component({
 
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],

  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => RegisterPageComponent),
    }
  ]
})


export class RegisterPageComponent {
  RegisterationForm = new FormGroup({
    fullname: new FormControl (''),
    email: new FormControl(''),
    password: new FormControl('')
  });


  items: User[] = [];
  password: any;
  email: any;
  name: any;
  userService: any;
  

  constructor(
    private service:UserService,
    private router: Router
  ) {}


  ngOnInit(): void {}

  
  Register() {
    let user = {
      fullname: this.RegisterationForm.value.fullname || '',
      email: this.RegisterationForm.value.email || '',
      password: this.RegisterationForm.value.password|| ''
    };

    this.service.register(user).subscribe((res: any) => {
      res
      this.router.navigate(['/login']);
    });
  }
  }

  

