import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-modeldriven',
  templateUrl: './modeldriven.component.html',
  styles: ['input.ng-invalid{border-left: 5px solid red;}input.ng-valid{border-left: 5px solid green;}']
})
export class ModeldrivenComponent implements OnInit {
  flag=true;
  // userForm=new FormGroup({name :new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(7)]),
  // email:new FormControl(''),age:new FormControl('',Validators.required),
  // address:new FormGroup({street:new FormControl(),
  //   city:new FormControl(),state:new FormControl(),postelcode:new FormControl()})})
  userForm=new FormGroup({name:new FormControl('abhishek',[Validators.required,Validators.minLength(6)])})


  constructor() { }

  ngOnInit() {
  }
  onSubmit()
  {

    console.log(this.userForm.value)
    
  }

}
