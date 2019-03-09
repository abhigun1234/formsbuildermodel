import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validator} from '@angular/forms'
@Component({
  selector: 'app-modeldrivenc',
  templateUrl: './modeldrivenc.component.html',
  styleUrls: ['./modeldrivenc.component.css']
})
export class ModeldrivencComponent implements OnInit {
  // userForm= new FormGroup({name :new FormControl(),email :new FormControl(),
  //   address:new FormGroup({street:new FormControl(),postelcode:new FormControl(),city:new FormControl()})})
  
  registerForm=new FormGroup({name:new FormControl("abhishek",),email:new FormControl(),
    address:new FormGroup({street:new FormControl(),city:new FormControl(),postelcode:new FormControl("2345")})})
  
  constructor() { }

  ngOnInit() {
  }
  onSubmit()
  {

    console.log(this.registerForm.value)
  }
}
