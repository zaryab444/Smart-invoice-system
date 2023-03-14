import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingConstant } from './app-routing-constants';

let routingConstant = new RoutingConstant();
const routes: Routes = [{ 
  path: routingConstant.cadencies, 
  loadChildren: () => 
  import('./feature/cadencies/cadencies.module').then(m => m.CadenciesModule) 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
