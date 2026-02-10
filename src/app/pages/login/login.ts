import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private route:Router){}
 email:string=""
 password:string=""

 user:any={

 }

 login(){
  this.user=JSON.parse(sessionStorage.getItem('userdetails')||"")

  if(this.email==this.user.email){
    if(this.password=this.user.password){
      alert('login successfully')
      this.route.navigate(['/home'])
    }
    else('password missmatch')
  }
  else(

    alert('please fil the form')
  )
 }
}
