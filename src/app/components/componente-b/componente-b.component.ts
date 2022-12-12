import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit {

  constructor() { }
  resultado:any
  mensaje:any
  ngOnInit(): void {
    this.recuperar()
  }
  recuperar()
  {
    this.resultado = localStorage.getItem('Valor_Total');
    this.mensaje = localStorage.getItem('mensaje');
  }
}
