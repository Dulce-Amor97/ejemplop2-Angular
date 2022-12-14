import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import {FormsModule} from '@angular/forms';
import { AgregarComponent } from './agregar/agregar.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { UtlService } from './services/utl.service';




@NgModule({
  declarations: [
    AgregarComponent,
    AlumnosComponent,
    MainPageComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    UtlService
  ]
})
export class UtlModule { }
