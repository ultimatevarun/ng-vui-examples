import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/accordion',
    pathMatch: 'full'
  },
  /*{
    path: 'accordion',
    loadComponent: () => import('./pages/accordion/accordion-page.component').then(m => m.AccordionPageComponent)
  },
  {
    path: 'date-picker',
    loadComponent: () => import('./pages/date-picker/date-picker-page.component').then(m => m.DatePickerPageComponent)
  },
  {
    path: 'multi-select',
    loadComponent: () => import('./pages/multi-select/multi-select-page.component').then(m => m.MultiSelectPageComponent)
  },
  {
    path: 'user-form-example',
    loadComponent: () => import('./pages/user-form-example/user-form-example-page.component').then(m => m.UserFormExamplePageComponent)
  },*/
  {
    path: '**',
    redirectTo: '/accordion'
  }
];
