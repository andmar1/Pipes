import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// importaciones externas, modulos personalizados
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el locale de la app 
import localesMx from '@angular/common/locales/es-MX';
import localesFr from '@angular/common/locales/fr';  //frances

import { registerLocaleData } from '@angular/common'

registerLocaleData( localesMx );
registerLocaleData( localesFr ); //registrar idioma frances

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimeNgModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-MX' }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
