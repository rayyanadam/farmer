import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CropsComponent } from './pages/crops/crops.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { InsertCropsComponent } from './pages/insert-crops/insert-crops.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { OrderComponent } from './pages/order/order.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[
      {
        path: 'crops',
        component: CropsComponent
      },
      {
        path: 'order',
        component: OrderComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
