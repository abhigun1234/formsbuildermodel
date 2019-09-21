import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {

  
  
  userForm:FormGroup;
  constructor(private form_builder :FormBuilder) { }
  
  ngOnInit() {
    
   this.userForm=this.form_builder.group({name:['abhishek',Validators.required],email:['',Validators.email]})
  
  }
  onSubmit()
  {
    console.log( this.userForm.value)
  }

}
