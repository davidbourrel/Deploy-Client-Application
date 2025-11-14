import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';

type AppRoutes = {
  home: { path: string; title?: string };
  deployClient: { path: string; title?: string };
  generateToken: { path: string; title?: string };
  notFound: { path: string; title?: string };
};

export const APP_ROUTES: AppRoutes = {
  home: { path: 'home', title: 'Home' },
  deployClient: { path: 'deploy-client', title: 'Deploy Client' },
  generateToken: { path: 'generate-token', title: 'Generate Token' },
  notFound: { path: '**' },
};

export const routes: Routes = [
  { path: '', redirectTo: APP_ROUTES.home.path, pathMatch: 'full' },
  {
    path: APP_ROUTES.home.path,
    title: APP_ROUTES.home.title,
    component: Home,
  },
  {
    path: APP_ROUTES.deployClient.path,
    title: APP_ROUTES.deployClient.title,
    loadComponent: () => import('./pages/deploy-client/deploy-client').then((m) => m.DeployClient),
  },
  {
    path: APP_ROUTES.generateToken.path,
    title: APP_ROUTES.generateToken.title,
    loadComponent: () =>
      import('./pages/generate-token/generate-token').then((m) => m.GenerateToken),
  },
  {
    path: APP_ROUTES.notFound.path,
    component: NotFound,
  },
];
