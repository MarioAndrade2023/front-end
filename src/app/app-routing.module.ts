import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPeliculasComponent } from './components/listar-peliculas/listar-peliculas.component';
import { CrearPeliculaComponent } from './components/crear-pelicula/crear-pelicula.component';

const routes: Routes = [
  {path:'',component:ListarPeliculasComponent},
{path:'crear-pelicula',component:CrearPeliculaComponent},
{path:'editar-pelicula/:id',component:CrearPeliculaComponent},
{path:'**',redirectTo:'',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
