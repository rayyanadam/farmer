import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SigninComponent } from './pages/signin/signin.component';
import { CropsComponent } from './pages/crops/crops.component';
import { InsertCropsComponent } from './pages/insert-crops/insert-crops.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { OrderComponent } from './pages/order/order.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    SigninComponent,
    CropsComponent,
    InsertCropsComponent,
    ProfileComponent,
    DashboardComponent,
    RegistrationComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
