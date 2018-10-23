import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppComponent } from './app.component';

const ROUTES: Routes =[
    { path: '', redirectTo: '/menu', pathMatch: 'full' },
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'sign-up', component: SignUpComponent},
    { path: '**', redirectTo: '/menu', pathMatch: 'full' },
];

export {ROUTES};