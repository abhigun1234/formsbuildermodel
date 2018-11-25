import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styles: ['input.ng-invalid{border-left: 5px solid red;}input.ng-valid{border-left: 5px solid green;}']
})
export class FormValidationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
