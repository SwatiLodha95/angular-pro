import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
loginForm: FormGroup;
issubmiited = false;
constructor(private fb: FormBuilder) { 
// this.loginForm = new FormGroup({
// name: new FormControl(),
// password: new FormControl()
// })
this.loginForm = this.fb.group({
  
  mail: ['',[Validators.required, Validators.email]],
  password: ['',[Validators.required, Validators.pattern("[A-Z][a-z]")]]
})
}
  ngOnInit(): void {
  }
  onTap(loginForm: FormGroup){
    this.issubmiited = true;
console.log(`Valid form = ${loginForm.valid}`);
console.log(`Valid form= ${loginForm.value.mail}`);
console.log(`Valid form= ${loginForm.value.password}`);
  }

}
