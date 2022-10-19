import { Component, EventEmitter, Input, Output} from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interface';
import { UtlService } from '../services/utl.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

   // @Input() alumnosUtl:AlumnosUtl[]=[];
  @Input() regAlumno:AlumnosUtl={
    nombre: '',
    edad: 0
  }

    //@Output () onNuevoAlumno: EventEmitter<AlumnosUtl>=new EventEmitter(); //Agregar elementoa del hijo al padre

  constructor(private utlservice:UtlService) { }

  agregar(): void {
    console.log(this.regAlumno);
    //this.alumnosUtl.push(this.regAlumno);
    //this.onNuevoAlumno.emit(this.regAlumno);
    this.utlservice.agregarNuevoAlumno(this.regAlumno);

    this.regAlumno={
      nombre: '',
      edad: 0
    }
  }

}
