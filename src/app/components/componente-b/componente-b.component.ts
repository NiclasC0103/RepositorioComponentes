import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit {

  constructor(private router: Router) { }
/*   resultado:any
  mensaje:any */

  correore:any
  passre:any
  namere:any
  tlfre:any
  ngOnInit(): void {
    this.recuperar()
  }
  recuperar()
  {
/*     this.resultado = localStorage.getItem('Valor_Total');
    this.mensaje = localStorage.getItem('mensaje'); */
    this.correore = localStorage.getItem('correo');
    this.passre = localStorage.getItem('passw');
    this.namere = localStorage.getItem('nom');
    this.tlfre = localStorage.getItem('telf');
  }
  Pagina1(){
    this.router.navigate(['']);
  }
}
