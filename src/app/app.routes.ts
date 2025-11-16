import { Routes } from '@angular/router';

import { SetupChoice } from './feature/setup-choice/setup-choice';
import { NotFound } from './shared/components/not-found/not-found';

type AppRoutes = {
  setupChoice: { path: string; title?: string };
  clientDeployment: { path: string; title?: string };
  generateToken: { path: string; title?: string };
  notFound: { path: string; title?: string };
};

export const APP_ROUTES: AppRoutes = {
  setupChoice: { path: 'setup-choice', title: 'Setup Choice' },
  clientDeployment: { path: 'client-deployment', title: 'Client Deployment' },
  generateToken: { path: 'generate-token', title: 'Generate Token' },
  notFound: { path: '**' },
};

export const routes: Routes = [
  { path: '', redirectTo: APP_ROUTES.setupChoice.path, pathMatch: 'full' },
  {
    path: APP_ROUTES.setupChoice.path,
    title: APP_ROUTES.setupChoice.title,
    component: SetupChoice,
  },
  {
    path: APP_ROUTES.clientDeployment.path,
    title: APP_ROUTES.clientDeployment.title,
    loadComponent: () =>
      import('./feature/client-deployment/client-deployment').then((m) => m.ClientDeployment),
  },
  {
    path: APP_ROUTES.generateToken.path,
    title: APP_ROUTES.generateToken.title,
    loadComponent: () =>
      import('./feature/generate-token/generate-token').then((m) => m.GenerateToken),
  },
  {
    path: APP_ROUTES.notFound.path,
    component: NotFound,
  },
];
