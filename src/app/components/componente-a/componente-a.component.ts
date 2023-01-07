import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent implements OnInit {

  constructor(private router: Router) { }
/*   numero:any;
  sueldos=[1700, 1600, 1900];
  suma:any */
  email:any
  pass:any
  name:any
  tlf: any
  ngOnInit(): void {
/*     this.numero=3;
    this.suma=0; */
    this.email
    this.pass
    this.name
    this.tlf
    this.almacenar();
  }
  almacenar()
  {
/*     localStorage.setItem('Valor_Total', this.numero)
    localStorage.setItem('mensaje', "mensaje almacenado") */
    localStorage.setItem('correo', this.email)
    localStorage.setItem('passw', this.pass)
    localStorage.setItem('nom', this.name)
    localStorage.setItem('telf', this.tlf)
  }
  Pagina2(){
    this.router.navigate(['pagina2']);
  }
}
