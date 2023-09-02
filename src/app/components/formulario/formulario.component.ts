import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import Monedas from '../../../data/monedas';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  // props
  public nameLabel:string; // envio nombre del label a select-monedas
  public options:Array<any>; // opciones que se envian a select-monedas
  public moneySelect:string | [] ; // para recibir moneda seleccioada 
  public nameLabelCrypto:string; // envio nombre del label crypto a select-monedas
  public optionsCrypto:Array<any>; // envio opciones de cryptos a select-monedas
  public cryptoSelect:string | [] ; // para recibir crypto seleccioada 
  public message:any;
  @Output() selectedCoins = new EventEmitter();

  // construc
  constructor(){
    this.nameLabel = 'Elige tu Moneda';
    this.options = Monedas.monedas;
    this.moneySelect = '';
    
    this.nameLabelCrypto = 'Elige tu Criptomoneda';
    this.optionsCrypto = new Array();
    this.cryptoSelect = '';

    this.message = {error:false,message:''};
  }
  // meths
  ngOnInit(): void {
    /**
     * Funcion para consultar una API CryptoCompare
     */
    const consultarAPI = async () =>{
      const URL:string = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"; // url de la API
      const RESPUESTA = await fetch(URL); // Respuesta de la peticion
      const RESULTADO = await RESPUESTA.json(); // resultado en formato json
      
      // .map(): crea un nuevo arreglo 
      const ARRAY_CRYPTOS = RESULTADO.Data.map( (cripto:any) => {
        // crear objeto por cada iteracion
        const objeto = {
          id:cripto.CoinInfo.Name,
          name:cripto.CoinInfo.FullName
        };
        return objeto; // para ir almmacenendo el objeto en el array
      });

      this.optionsCrypto = await ARRAY_CRYPTOS; // almaceno el array en una variable
      //console.log(this.optionsCrypto);
    };

    consultarAPI();

  }
  /**
   * Funcion para obtener el id de la 
   * moneda seleccionada, dato recibido desde:
   * select-monedas.component
   * @param ev evento recibido del select
   */
  getMoneySelected(ev:any){
    this.moneySelect = ev;
    //console.log(this.moneySelect);
  }
  /**
   * Funcion para obtener el id de la 
   * criptomoneda seleccionada.
   * @param ev evento recibido del select
   */
  getCryptoSelected(ev:any){
    this.cryptoSelect = ev;
  }
  /**
   * Funcion para validar los datos del formulario
   * @param ev evento del formulario
   */
  onSubmit(ev:any){
    // si las opciones seleccionadas estan vacias
    if([this.moneySelect,this.cryptoSelect].includes('')){
      // enviar mensaje de error
      this.message.error = true;
      //console.log({money:this.moneySelect,crypto:this.cryptoSelect});
    }else{
      this.message.error = false;
      //console.log('Enviando Formulario...');
      this.sendOptionsSelected(this.moneySelect,this.cryptoSelect);
    }


    ev.preventDefault();
  }
  /**
   * Funcion para enviar las 
   * monedas seleccionadas
   * @param money moneda seleccionada
   * @param cripto criptomoneda seleccionada
   */
  sendOptionsSelected(money:any,cripto:any){
    let coins = {moneda:money,cripto:cripto};
    this.selectedCoins.emit(coins);
  }
}
