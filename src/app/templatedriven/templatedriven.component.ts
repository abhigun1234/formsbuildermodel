import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {
 name1='abhishek'
  constructor() { }

  ngOnInit() {
  }
  onSubmit(val:any)
  {
    console.log(val)
  }
}
