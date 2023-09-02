import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // props
  public title = 'Cotiza criptomonedas al instante';
  public coins:any;
  public cotizacion:any;
  public cargando:boolean;

  // constr
  constructor(){
    this.coins = null;
    this.cargando = false;
  }
  
  // meths
  /**
   * Funcion para recibir las monedas
   * seleccionadas en el formulario
   * @param ev evento emitido por formulario.component
   */
  getCoins(ev:any){
    this.coins = ev;
    // cotizar
    this.cotizarCripto();
  }
  
  /**
   * Funcion para cotizar la criptomoneda
  */
  cotizarCripto(){
    // destructuring del objeto que contiene las monedas
    const {moneda,cripto} = this.coins;
    // Funcion para realizar la peticion
    const cotizar = async () => {
      this.cargando = true;
      // url con los valores a comparar
      const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
      
      // extraer los datos
      const respuesta = await fetch(URL);
      const resultado = await respuesta.json();
      /* Utilizo corchetes porque,
      las llaves de los resultados cambian
      y usan el ID de las monedas, por lo 
      tanto usando corchetes, se buscca la 
      propiedad por el nombre.
      */
     this.cotizacion = await resultado.DISPLAY[cripto][moneda];
     this.cargando = false;
    }
    cotizar();
  }
}
