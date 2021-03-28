import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  username:any;
  password:any;
 
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
LoginUser(){
  if(this.username== "sirine@gmail.com" && this.password=="123456"){
    this.router.navigate(['/customer']);

    console.log("welcome back");
  }

}
}
