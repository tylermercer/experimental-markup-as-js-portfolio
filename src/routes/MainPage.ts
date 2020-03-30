import { section, h1, p, a, b, header } from "markup-as-js"

const Main = () => section(
  header(
    h1("Tyler Mercer"),
    p("Humanistic Software Developer"),
    p(a({href: "/projects"}, b("View my projects")))
  )
);

export default Main;