import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  constructor(private route:Router){}
user:any={
  username:"",
  email:"",
  password:""
}

register(){
  if(this.user.username&&this.user.email&&this.user.password){
    alert('register successfully')
    sessionStorage.setItem('userdetails',JSON.stringify(this.user))
    this.route.navigate(['/login'])
  }
  else{
    alert('please fill the form')
  }
}
}


