import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroCarrosComponent } from './cadastro-carros';
import { HomeComponent } from './home';
import { ListagemComponent } from './listagem';


const routes: Routes = [


  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroCarrosComponent },
  { path: 'publicacao', component:  ListagemComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
