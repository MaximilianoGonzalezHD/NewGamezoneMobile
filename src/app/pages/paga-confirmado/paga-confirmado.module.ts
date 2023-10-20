import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagaConfirmadoPageRoutingModule } from './paga-confirmado-routing.module';

import { PagaConfirmadoPage } from './paga-confirmado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagaConfirmadoPageRoutingModule
  ],
  declarations: [PagaConfirmadoPage]
})
export class PagaConfirmadoPageModule {}
