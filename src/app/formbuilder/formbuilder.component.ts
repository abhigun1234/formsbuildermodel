import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import {Routes} from '@angular/router'
@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styles: ['input.ng-invalid{border-left: 5px solid red;}input.ng-valid{border-left: 5px solid green;}']
})
export class FormbuilderComponent implements OnInit {

  
  
  userForm:FormGroup;
  constructor(private form_builder :FormBuilder) { 

  }
  
  ngOnInit() {
    
  this.userForm=this.form_builder.group({name:['ravi',Validators.required,
  Validators.minLength(5),Validators.maxLength(7)],
  email:['abhi@gmail.com',Validators.email]})
  
  }
  onSubmit()
  {
    console.log(this.userForm.value)
  }

  nevigate(){
 
  }
}