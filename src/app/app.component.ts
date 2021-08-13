import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formsdemo';
  public onSubmit(value :any )
  {
    alert(value)
    console.log(value)
  }
  onClickData(){

    alert("hello")
  }
}
