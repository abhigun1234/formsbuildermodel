import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateuser',
  templateUrl: './templateuser.component.html',
  styleUrls: ['./templateuser.component.css']
})
export class TemplateuserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //register
registerUser(val:any)
{
 console.log(val)
}

}
