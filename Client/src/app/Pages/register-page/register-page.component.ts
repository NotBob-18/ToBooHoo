import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';



@Component({
 
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
router:any; 

  constructor(
    private users: UserService ) {}

    form: FormGroup = new FormGroup ({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')

    });
    ngOnInit() {

    }
  
    registerUser() {
      this.users.registerUser(this.form.value).subscribe((data) => {
        console.log(data);
  
        this.router.navigate(['/login']);
      });
    }
  }

  

