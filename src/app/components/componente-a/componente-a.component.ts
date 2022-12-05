import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent implements OnInit {

  constructor() { }
  numero:any=0;
  sueldos=[1700, 1600, 1900];
  ngOnInit(): void {
  }

}
