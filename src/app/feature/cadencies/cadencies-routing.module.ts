import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingConstant } from 'src/app/app-routing-constants';
import { CadenciesListComponent } from './cadencies-list/cadencies-list.component';

let routingConstant = new RoutingConstant();
const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: routingConstant.cadenciesList,
        component:CadenciesListComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadenciesRoutingModule {}
