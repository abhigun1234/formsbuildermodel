import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ModeldrivenComponent } from './modeldriven/modeldriven.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { TeplateComponent } from './teplate/teplate.component';
import { ModeldrivencComponent } from './modeldrivenc/modeldrivenc.component';
import { UseregistrationComponent } from './useregistration/useregistration.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { TowwayComponent } from './towway/towway.component'
@NgModule({
  declarations: [
    AppComponent,
    FormValidationComponent,
    ModeldrivenComponent,
    FormbuilderComponent,
    TeplateComponent,
    ModeldrivencComponent,
    UseregistrationComponent,
    TemplatedrivenComponent,
    TowwayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
