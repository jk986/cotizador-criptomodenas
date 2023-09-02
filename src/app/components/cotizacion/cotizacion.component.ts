import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit, OnChanges{
  // props
  @Input() datosCotizacion:any;
  public datos:any;
  public imagenUrl:any;
  
  // construct
  constructor(){
  }
  // meths
  ngOnChanges(changes: SimpleChanges): void {
    this.getDatosCotizacion(this.datosCotizacion);
  }
  ngOnInit(): void {
    /*
      PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE
    */
   this.getDatosCotizacion(this.datosCotizacion);
    
  }
  getDatosCotizacion(data:any){
    this.datos = data;
    this.imagenUrl = 'https://cryptocompare.com/'+this.datos.IMAGEURL;
  }
}
