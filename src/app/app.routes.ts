import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';


export const routes: Routes = [
  { path: '', component: HeroComponent }, // Ruta para HeroComponent en la raíz

  { path: '**', redirectTo: '' }
];
