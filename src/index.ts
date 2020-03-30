import { h1, h2, header, p, nav, a, ul, li, b } from 'markup-as-js';

const app = header(
  nav(
    h2(a({href: "/"}, "Tyler Mercer")),
    ul(
      li(a({href: "/"}, "Home")),
      li(a({href: "/projects"}, "Projects")),
      li(a({href: "/blog"}, "Blog")),
    )
  ),
  h1("Tyler Mercer"),
  p("Humanistic Software Engineer"),
  p(a({href: "/projects"}, b("View my projects")))
);

document.getElementById("app")?.appendChild(app);