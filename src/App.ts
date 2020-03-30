import { h1, h2, header, p, nav, a, ul, li, b, div } from 'markup-as-js';

const App = () => div(
  header(nav(
    h2(a({href: "/"}, "Tyler Mercer")),
    ul(
      li(a({href: "/"}, "Home")),
      li(a({href: "/projects"}, "Projects")),
      li(a({href: "/blog"}, "Blog")),
    )
  )),
  div({id: "route"})
);

export default App;