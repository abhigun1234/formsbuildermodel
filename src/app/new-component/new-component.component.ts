import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators } from '@angular/forms'
import {RestroService} from '..//restro.service'
@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:RestroService) { }
  userForm=this.fb.group({name:['abhishek'],price:[''],description:[]})
  ngOnInit() {
  }
  onSubmit() {

    console.log(this.userForm.value)
  
    this.service.postResaturentMenu(this.userForm.value).subscribe(res=>{

      console.log("res",res)
    })
    // console.log(this.nameObj.name)
    // if (this.nameObj.name === 'abhishek') {
    //   alert("hello")
     
    // }

  }
}
