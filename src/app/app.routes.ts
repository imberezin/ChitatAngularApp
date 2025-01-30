import { Routes } from '@angular/router';
import { AppMainPageComponent } from './pages/app-main-page/app-main-page.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: AppMainPageComponent,
      },
];
