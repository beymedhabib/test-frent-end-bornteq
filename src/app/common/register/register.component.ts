import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private AuthService: AuthService) { }
  RegisterForm: FormGroup;
  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }
  register() {
    this.AuthService.Register(this.RegisterForm.value);
  }

}
