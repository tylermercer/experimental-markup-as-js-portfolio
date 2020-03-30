import { h1, header, ul, section, li, a } from 'markup-as-js';

const QUERY = 'https://api.github.com/users/tylermercer/repos?sort=pushed&direction=desc';

const getProjects = () => fetch(QUERY)
  .then(res => res.json())
  .then(repos => ul(
    ...repos.map((r:any) => li(a({href: r.html_url, target: "_blank"}, r.name)))
  ));

const ProjectsPage = () => section(
  header(
    h1("Projects"),
    getProjects()
  ),
);

export default ProjectsPage;