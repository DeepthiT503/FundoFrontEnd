import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServicesService } from '../../service/User Services/user-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registerForm!: FormGroup;

  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserServicesService) { } // Inject UserService here

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }
    );
  
}
  // convenience getter for easy access to form fields

  handleRegister() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    const { firstName, lastName, email, password } = this.registerForm.value;
    this.userService.userRegister({
      firstName: firstName,
      lastName: lastName,
      emailId: email,
      password: password
    }).subscribe(res => console.log(res), error => console.log(error)
    );
    console.log(this.registerForm.value);
  }
  get f() { return this.registerForm.controls; }

}
