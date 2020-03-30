import { h1, header, h3, section, a, aside, p, small } from 'markup-as-js';

const QUERY = 'https://api.github.com/users/tylermercer/repos?sort=pushed&direction=desc';

const getProjects = () => fetch(QUERY)
  .then(res => res.json())
  .then(repos => section(
    ...repos.filter((r:any) => r.description).map((r:any) => aside(
      h3(a({href: r.html_url, target: "_blank"}, r.name)),
      p((r.description || "")),
      p(small(r.language))
    ))
  ));

const ProjectsPage = () => section(
  header(
    h1("Projects"),
    getProjects()
  ),
);

export default ProjectsPage;