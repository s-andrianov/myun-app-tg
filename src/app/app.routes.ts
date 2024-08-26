import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupStep1Component } from './pages/signup/steps/step1/step1.component';
import { SignupStep2Component } from './pages/signup/steps/step2/step2.component';
import { SignupStep3Component } from './pages/signup/steps/step3/step3.component';
import { SignupStep4Component } from './pages/signup/steps/step4/step4.component';
import { SignupStep5Component } from './pages/signup/steps/step5/step5.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'signup/1', component: SignupStep1Component },
    { path: 'signup/2', component: SignupStep2Component },
    { path: 'signup/3', component: SignupStep3Component },
    { path: 'signup/4', component: SignupStep4Component },
    { path: 'signup/5', component: SignupStep5Component },
];