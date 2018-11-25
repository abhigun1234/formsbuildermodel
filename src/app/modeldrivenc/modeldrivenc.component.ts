import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
@Component({
  selector: 'app-modeldrivenc',
  templateUrl: './modeldrivenc.component.html',
  styleUrls: ['./modeldrivenc.component.css']
})
export class ModeldrivencComponent implements OnInit {
  userForm= new FormGroup({name :new FormControl(),email :new FormControl(),
    address:new FormGroup({street:new FormControl(),postelcode:new FormControl(),city:new FormControl()})})
  constructor() { }

  ngOnInit() {
  }
  onSubmit()
  {

    console.log(this.userForm.value)
  }
}
