import { NgModule } from '@angular/core';

// PrimeNg modules
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    
  ],
  exports: [ 
    ButtonModule,
    CardModule
  ]
})
export class PrimeNgModule { }
