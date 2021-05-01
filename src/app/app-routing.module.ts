import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PaisDetalleComponent } from './components/pais-detalle/pais-detalle.component';
import { PaisesComponent } from './components/paises/paises.component';
import { HomeComponent } from './inicio/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'colaboradores', component: ColaboradoresComponent},
  { path: 'paises', component: PaisesComponent },
  {path: 'paisdetalle/:id', component: PaisDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
