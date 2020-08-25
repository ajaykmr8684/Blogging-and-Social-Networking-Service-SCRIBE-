import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from "@angular/forms";
import { AuthService } from '../auth.service';
import { Router } from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm:FormGroup;
  message:string ="";
  userError:any;

  constructor(public fb: FormBuilder, public authService: AuthService, public router:Router) {

    this.myForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    })


   }


   onSubmit(form){

    this.authService.login(form.value.email, form.value.password).then((data)=>{

      console.log(data);
      this.message = "You've been logged in Successfully!"
      this.router.navigate(["/myblogs"]);
    }).catch((error)=>{
      console.log(error);
      this.userError = error;
    })
   }

  ngOnInit(): void {
  }

}
