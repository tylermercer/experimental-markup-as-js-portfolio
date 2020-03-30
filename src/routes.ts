import Main from './routes/MainPage';
import Blog from './routes/BlogPage';
import Projects from './routes/ProjectsPage';

type Route = {
  path: string,
  builder: () => Element
}

const routes: Route[] = [
  {
    path: '/',
    builder: Main
  },
  {
    path: '/blog',
    builder: Blog
  },
  {
    path: '/projects',
    builder: Projects
  },
];

export default routes;