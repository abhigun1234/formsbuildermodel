import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-useregistration',
  templateUrl: './useregistration.component.html',
  styles:['input.ng-invalid{border-left: 5px solid red;}input.ng-valid{border-left: 5px solid green;}']
})
export class UseregistrationComponent implements OnInit {
  //myname="abhishek"
  constructor() { }

  ngOnInit() {
  }
  onSubmit(val)
  {
    console.log(val)

  }

}
