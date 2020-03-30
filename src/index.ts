import { h1, header, p } from 'markup-as-js';

const app = header(
  h1("Tyler Mercer"),
  p("Humanistic Software Engineer"),
);

document.getElementById("app")?.appendChild(app);