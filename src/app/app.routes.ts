import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Dashboard } from './components/dashboard/dashboard';
import { WorkoutLog } from './components/workout-log/workout-log';
import { PersonalRecord } from './components/personal-record/personal-record';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
  { path: 'workout-log', component: WorkoutLog, canActivate: [authGuard] },
  { path: 'personal-records', component: PersonalRecord, canActivate: [authGuard] }
];
