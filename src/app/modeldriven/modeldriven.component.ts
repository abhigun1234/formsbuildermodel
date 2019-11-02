import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-modeldriven',
  templateUrl: './modeldriven.component.html',
  styles: ['input.ng-invalid{border-left: 5px solid red;}input.ng-valid{border-left: 5px solid green;}']
})
export class ModeldrivenComponent implements OnInit {
  userForm=new FormGroup({name :new FormControl('manish',[Validators.required,Validators.minLength(3)]),
  email:new FormControl(''),address:new FormGroup({street:new FormControl(),
    city:new FormControl(),state:new FormControl(),postelcode:new FormControl()})})
  // userForm=new FormGroup({name:new FormControl(),email:new FormControl(),address:new FormGroup({

  //   street:new FormControl(),city :new FormControl(),postelcode:new FormControl()
  // })})
  constructor() { }

  ngOnInit() {
  }
  onSubmit()
  {

    console.log(this.userForm.value)
    
  }

}
