import { div, h1, p, a, b } from "markup-as-js"

const Main = () => div(
  h1("Tyler Mercer"),
  p("Humanistic Software Engineer"),
  p(a({href: "/projects"}, b("View my projects")))
);

export default Main;