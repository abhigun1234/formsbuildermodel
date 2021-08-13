import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes,RouterModule} from '@angular/router'
import { WelcomeComponent } from './welcome/welcome.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';


const routes :Routes=[{path:'',component:TemplatedrivenComponent},
{path:'welcome',component:WelcomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




export const routing=[WelcomeComponent,TemplatedrivenComponent]