import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  registerForm: FormGroup
  constructor(private fb: FormBuilder, private authservice: AuthService) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]]
    })

  }

  ngOnInit(): void {
  }
  registerNewUser(registerForm: FormGroup) {
    if (registerForm.valid) {
      this.authservice.registration(registerForm.value.username, registerForm.value.password)
        .then(data => {
          alert("Registration is Successful");
        }).catch(error => {
             alert(error); 
        })
    }
    else {
      alert("All fields are Mandatory");
    }
  }
}
