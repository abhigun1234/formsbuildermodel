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
import { TowwayComponent } from './towway/towway.component';
import { LoginComponent } from './login/login.component';
import { TemplateuserComponent } from './templateuser/templateuser.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component'
import { AppRoutingModule } from './app.router.module';
import { NewComponentComponent } from './new-component/new-component.component';
import { CommentComponent } from './comment/comment.component';
import {HttpClientModule} from '@angular/common/http'
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
    TowwayComponent,
    LoginComponent,
    TemplateuserComponent,
    HeaderComponent,
    WelcomeComponent,
    NewComponentComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
