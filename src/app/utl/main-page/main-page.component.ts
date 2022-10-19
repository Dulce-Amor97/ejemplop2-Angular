import { Component, OnInit } from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interface';
import { UtlService } from '../services/utl.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  /*  alumnosUtl:AlumnosUtl[]=[
    {
      nombre: 'Mario',
      edad: 22
    },
    {
      nombre: 'Veronica',
      edad: 25
    },
    {
      nombre: 'Luisa',
      edad: 20
    }

  ] */

  regAlumno:AlumnosUtl={
    nombre:'',
    edad: 0
  }

  constructor() { }

    /* agregarNuevoAlumno(argumento:AlumnosUtl){
    this.alumnosUtl.push(argumento);
    this.UtlService.muestra();
  } */

  ngOnInit(): void {
  }

}
