import { NgModule } from '@angular/core';
import { TestBlPageRoutingModule } from './test-bl-routing.module';

import { TestBlPage } from './test-bl.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TestBlPageRoutingModule,    
  ],
  declarations: [TestBlPage]  
})
export class TestBlPageModule {}
