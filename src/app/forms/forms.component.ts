import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import {RestroService} from '..//restro.service'
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  constructor(private fb: FormBuilder,private service:RestroService){
  
  }
  userForm=this.fb.group({name:['abhishek'],price:[''],description:[]})

  flag = true;
  nameObj: any;
  // userForm = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(7)]),
  //   email: new FormControl('',[Validators.email]),phoneno:new FormControl('',Validators.required)

  // })
  // userForm=new FormGroup({name:new FormControl('abhishek',[Validators.required,Validators.minLength(6)])})
  // userForm=new FormGroup({name:new FormControl(['',Validators.required]),email:new FormControl(['',Validators.email])})

 

  ngOnInit() {
  }
  onSubmit() {

    console.log(this.userForm.value)
    this.nameObj = this.userForm.value
    this.service.postResaturentMenu(this.userForm.value).subscribe(res=>{

      console.log("res",res)
    })
    // console.log(this.nameObj.name)
    // if (this.nameObj.name === 'abhishek') {
    //   alert("hello")
     
    // }

  }
}
