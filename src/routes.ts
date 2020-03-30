import Main from './routes/MainPage';
import Blog from './routes/BlogPage';
import Projects from './routes/ProjectsPage';

type Route = {
  path: string,
  label: string,
  builder: (ctx: PageJS.Context, next: () => any) => Element,
  nav: boolean
}

const routes: Route[] = [
  {
    path: '/',
    label: 'Home',
    builder: Main,
    nav: true,
  },
  {
    path: '/blog',
    label: 'Blog',
    builder: Blog,
    nav: false
  },
  {
    path: '/projects',
    label: 'Projects',
    builder: Projects,
    nav: true
  },
];

export default routes;