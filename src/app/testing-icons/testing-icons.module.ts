import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestingIconsPageRoutingModule } from './testing-icons-routing.module';

import { TestingIconsPage } from './testing-icons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestingIconsPageRoutingModule
  ],
  declarations: [TestingIconsPage]
})
export class TestingIconsPageModule {}
