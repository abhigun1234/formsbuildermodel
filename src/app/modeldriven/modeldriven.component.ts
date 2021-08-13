import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'
@Component({
  selector: 'app-modeldriven',
  templateUrl: './modeldriven.component.html',
  styles: ['input.ng-invalid{border-left: 5px solid red;}input.ng-valid{border-left: 5px solid green;}']
})
export class ModeldrivenComponent implements OnInit {
  flag = true;
  nameObj: any;
  // userForm = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(7)]),
  //   email: new FormControl('',[Validators.email]),phoneno:new FormControl('',Validators.required)

  // })
  // userForm=new FormGroup({name:new FormControl('abhishek',[Validators.required,Validators.minLength(6)])})
  // userForm=new FormGroup({name:new FormControl(['',Validators.required]),email:new FormControl(['',Validators.email])})
  constructor(private fb: FormBuilder){
  
  }
  userForm=this.fb.group({name:['abhishek'],email:['',Validators.email]})
 

  ngOnInit() {
  }
  onSubmit() {

    console.log(this.userForm.value)
    this.nameObj = this.userForm.value
    console.log(this.nameObj.name)
    if (this.nameObj.name === 'abhishek') {
      alert("hello")
      // this.route.navigateByUrl('/welcome')
    }

  }

}
