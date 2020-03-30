import App from './App';
import page from 'page';
import routes from './routes';

const app = App();

document.getElementById("app")?.appendChild(app);

let routeNode: Element = document.getElementById("route") as Element;

if (!routeNode) console.error("No #route element found");

if (routeNode) {
  for (let route of routes) {
    page(route.path, () => {
      let newNode = route.builder();
      routeNode.parentElement?.replaceChild(newNode, routeNode);
      routeNode = newNode;
    });
  }
}
page();