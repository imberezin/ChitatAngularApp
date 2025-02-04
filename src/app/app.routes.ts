import { Routes } from '@angular/router';
import { AppMainPageComponent } from './pages/app-main-page/app-main-page.component';
import { SetUpPersonalStudyComponent } from './pages/set-up-personal-study/set-up-personal-study.component';
import { TrackingTablePageComponent } from './pages/tracking-table-page/tracking-table-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: AppMainPageComponent,
      },
      { path: 'app-set-up-personal-study', component: SetUpPersonalStudyComponent },
      { path: 'app-tracking-table-page', component: TrackingTablePageComponent },
      { path: 'app-settings-page', component: SettingsPageComponent },
      { path: 'app-login-page', component: LoginPageComponent },


];


//app-login-page