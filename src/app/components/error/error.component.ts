import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  // props
  public title:string;
  // constr
  constructor(){
    this.title  = 'Todos los campos son obligatorios';
  }
  // meths
}
