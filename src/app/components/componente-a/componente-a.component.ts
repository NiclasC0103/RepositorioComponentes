import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent implements OnInit {

  constructor(private router: Router) { }
  numero:any;
  sueldos=[1700, 1600, 1900];
  suma:any
  correo:any
  ngOnInit(): void {
    this.numero=3;
    this.suma=0;
    this.almacenar()
    this.correo=
  }
  almacenar()
  {
    localStorage.setItem('Valor_Total', this.correo)
    localStorage.setItem('mensaje', "mensaje almacenado")
  }
  enviar()
  {
    localStorage.setItem('correo', this.numero)
  }
  Pagina2(){
    this.router.navigate(['pagina2']);
  }
}
