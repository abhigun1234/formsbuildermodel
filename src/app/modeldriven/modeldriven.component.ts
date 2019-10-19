import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-modeldriven',
  templateUrl: './modeldriven.component.html',
  styleUrls: ['./modeldriven.component.css']
})
export class ModeldrivenComponent implements OnInit {
  userForm=new FormGroup({name :new FormControl('abhishek',[Validators.required]),
  email:new FormControl(''),address:new FormGroup({street:new FormControl(),
    city:new FormControl(),state:new FormControl(),postelcode:new FormControl()})})
  constructor() { }

  ngOnInit() {
  }
  onSubmit()
  {

    console.log(this.userForm.value)
    
  }

}
