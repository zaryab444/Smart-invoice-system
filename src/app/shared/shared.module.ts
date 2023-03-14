import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {AvatarModule} from 'primeng/avatar';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
     OverlayPanelModule,
    
    DropdownModule,
    TableModule,
    FormsModule,
     ReactiveFormsModule,
     AvatarGroupModule,
     AvatarModule,
    ButtonModule
  ],
  providers: [],
  exports: [
    OverlayPanelModule,
    DropdownModule,
    TableModule,
    FormsModule,
     ReactiveFormsModule,
     AvatarGroupModule,
     AvatarModule,
    ButtonModule
  ]
})
export class SharedModule { }
