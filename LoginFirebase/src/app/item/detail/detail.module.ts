import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule
  ],
  declarations: [DetailPage]
})
export class DetailPageModule {}
