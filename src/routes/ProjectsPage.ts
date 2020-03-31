import { h1, header, h3, section, a, aside, p, small } from 'markup-as-js';

const QUERY = 'https://api.github.com/users/tylermercer/repos?sort=pushed&direction=desc';

const prettify = (name: string) => {
  return name.replace(/-/g, " ").replace(/\w\S*/g, (txt:string) =>{
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const getProjects = () => fetch(QUERY)
  .then(res => res.json())
  .then(repos => section(
    ...repos.filter((r:any) => r.description).map((r:any) => aside(
      h3(a({href: r.homepage || r.html_url, target: "_blank"}, prettify(r.name))),
      p(small(r.language)),
      p((r.description || "")),
      p(a({href:r.html_url}, "View on GitHub")),
    ))
  ));

const ProjectsPage = () => section(
  header(
    h1("Projects"),
    getProjects()
  ),
);

export default ProjectsPage;
