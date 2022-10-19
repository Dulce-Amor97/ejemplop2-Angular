import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from './validators/primerLetraMayuscula';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  form:FormGroup;

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      nombre:['',{
        validators:[Validators. required, Validators.minLength(3), primeraLetraMayuscula()]
      }],
      password:[ '',{
        validators: [Validators. required]
      }]
    })
  }
  guardarUsuario(){
    console.log('Registro guardado');
  }
  obtenerErrorCampos(){
    var nom=this.form.get('nombre');
    
    if(nom.hasError('required')){
      return 'El campo nombre es requerido';
    }
    if(nom.hasError('minlength')){
      return 'La longitud minima es de tres caracteres';
    }
    if(nom.hasError('primeraLetraMayuscula')){
      return nom.getError('primeraLetraMayuscula').mensaje;
    }
  }
  obtenerErrorCamposP(){
    var pass=this.form.get('password');
    if(pass.hasError('required')){
      return 'El campo password es requerido';
    }
  }
}
