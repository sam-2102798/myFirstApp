import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full',
  },
  {
    path: 'principal',
    loadComponent: () => import('./paginas/principal/principal.page').then( m => m.PrincipalPage)
  },
  {
    path: 'ktm',
    loadComponent: () => import('./paginas/ktm/ktm.page').then( m => m.KtmPage)
  },

  {path: 'nosotros', loadComponent: () => import('./componentes/nosotros/nosotros.component').then( m => m.NosotrosComponent)},
  {path: 'preguntas', loadComponent: () => import('./componentes/preguntas/preguntas.component').then( m => m.PreguntasComponent)},
  {path: 'horarios', loadComponent: () => import('./componentes/horarios/horarios.component').then( m => m.HorariosComponent)},

];
