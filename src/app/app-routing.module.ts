import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteAComponent } from './components/componente-a/componente-a.component';
import { ComponenteBComponent } from './components/componente-b/componente-b.component';
import { ComponenteCComponent } from './components/componente-c/componente-c.component';

const routes: Routes = [
  {path: '', component: ComponenteAComponent},
  {path: 'pagina2', component: ComponenteBComponent},
  {path: 'pagina3', component: ComponenteCComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
