import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './product.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products/:id', component: ProductDetailComponent }
  // Puedes añadir más rutas aquí según otros componentes
];

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // Configuración de rutas
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
