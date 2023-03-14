import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadenciesRoutingModule } from './cadencies-routing.module';
import { CadenciesListComponent } from './cadencies-list/cadencies-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [CadenciesListComponent],
  imports: [
    
    CommonModule,
     CadenciesRoutingModule,
     SharedModule,
     AngularSvgIconModule.forRoot(),
    ],
})
export class CadenciesModule {}
