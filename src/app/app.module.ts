import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './shared/services/auth-interceptor.service';
import { InventoryComponent } from './screens/inventory/inventory.component';
import { FormsModule } from '@angular/forms';
import { BookDetailComponent } from './screens/book-detail/book-detail.component';
import { DashboardModule } from './screens/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
