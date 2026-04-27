import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './features/home/Home';
import JourneyPage from './features/journey/JourneyPage';
import JourneyDetailsPage from './features/journey/JourneyDetailsPage';
import ProjectsPage from './features/projects/ProjectsPage';
import ProjectDetailPage from './features/projects/ProjectDetailPage';
import SkillsPage from './features/skills/SkillsPage';
import ContactPage from './features/contact/ContactPage';
import ExperiencePage from './features/experience/ExperiencePage';
import NotFoundPage from './features/error/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'journey',
        element: <JourneyPage />,
      },
      {
        path: 'journey/:journeyId',
        element: <JourneyDetailsPage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'projects/:projectId',
        element: <ProjectDetailPage />,
      },
      {
        path: 'skills',
        element: <SkillsPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'experience',
        element: <ExperiencePage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
