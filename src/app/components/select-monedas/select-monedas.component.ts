import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-monedas',
  templateUrl: './select-monedas.component.html',
  styleUrls: ['./select-monedas.component.css']
})
export class SelectMonedasComponent {
  // props
  @Input() nameLabel:string; // etiqueta del input 
  @Input() monedas:Array<any>; // opciones a mostrar en el select
  public moneySelect:string; // id de la moneda seleccionada [(NgModel)]
  @Output() stateMoneySelect = new EventEmitter(); // evento para enviar moneda a formulario.comp...
  // construct
  constructor(){
    this.nameLabel = '';
    this.monedas = [];
    this.moneySelect = '';
  }
  //meths
  /**
   * Funcions que: 
   * envia la moneda seleccioana al 
   * componente formulario.component
   */
  sendOptionSelected(){
    this.stateMoneySelect.emit(this.moneySelect);
  }

}
