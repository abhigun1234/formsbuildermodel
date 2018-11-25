import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {

  
  /*userForm=new FormGroup({name :new FormControl(),
    email:new FormControl(),address:new FormGroup({street:new FormControl(),
      city:new FormControl(),state:new FormControl(),postelcode:new FormControl()})})*/
      userForm:FormGroup;
  constructor(private form_builder :FormBuilder) { }

  ngOnInit() {
    /*this.userForm=this.form_builder.group({name:['abhishek',Validators.required,Validators.maxLength(10)],
    address:this.form_builder.group({street:[Validators.required]})})*/
    this.userForm=this.form_builder.group({name:['abhishek',Validators.required],email:[Validators.email]})
  }

}
