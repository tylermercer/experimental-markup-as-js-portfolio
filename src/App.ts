import { h2, header, nav, a, ul, li, div, Observable } from 'markup-as-js';
import routes from './routes';

const App = (currentPath: Observable<string>) => {

  currentPath.subscribe((path: string) => {
    document.querySelector('nav ul a.active')?.classList.remove('active');
    document.querySelector(`nav ul a[href="${path}"]`)?.classList.add('active');
  });

  return div(
    header(nav(
      h2(a({href: "/"}, "Tyler Mercer")),
      ul(
        ...routes.filter(r => r.nav).map(r => li(a({href:r.path}, r.label)))
      )
    )),
    div({id: "route"})
  );
}

export default App;