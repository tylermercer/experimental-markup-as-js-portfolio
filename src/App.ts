import { h2, header, nav, a, ul, li, div } from 'markup-as-js';
import routes from './routes';

const App = () => div(
  header(nav(
    h2(a({href: "/"}, "Tyler Mercer")),
    ul(
      ...routes.filter(r => r.nav).map(r => li(a({href:r.path}, r.label)))
    )
  )),
  div({id: "route"})
);

export default App;