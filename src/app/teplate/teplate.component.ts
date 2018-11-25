import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teplate',
  templateUrl: './teplate.component.html',
  styleUrls: ['./teplate.component.css']
})
export class TeplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public onSubmit(value:any)
  {

    console.log(value)
  }

}
