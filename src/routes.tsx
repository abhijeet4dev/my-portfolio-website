import { RouteObject } from 'react-router-dom';
//Import { lazy } from 'react';
import HomePage from './pages/index';
import ProjectsPage from './pages/projects';
import AboutPage from './pages/about';
import ResumePage from './pages/resume';
import ContactPage from './pages/contact';
//import ProdNotFoundPage from './pages/_404';

//const NotFoundPage = import.meta.env.DEV
  //? lazy(() => import('../dev-tools/src/PageNotFound'))
//  : ProdNotFoundPage;

export const routes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/resume', element: <ResumePage /> },
  { path: '/contact', element: <ContactPage /> },
  //{ path: '*', element: <NotFoundPage /> },
];

export type Path = '/' | '/projects' | '/about' | '/resume' | '/contact';
export type Params = Record<string, string | undefined>;
