import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MzCardModule,MzSidenavModule,MzButtonModule,MzNavbarModule
} from 'ngx-materialize';
@NgModule({
  imports: [
  CommonModule, 
  MzCardModule,
  MzSidenavModule,
  MzButtonModule,
  MzNavbarModule
  ],
  exports: [
  CommonModule,
  MzCardModule,
  MzSidenavModule,
  MzButtonModule,
  MzNavbarModule
   ],
})

export class MaterialModule { }
