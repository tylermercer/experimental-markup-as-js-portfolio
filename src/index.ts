import { SimpleObservable } from 'markup-as-js';
import page from 'page';

import App from './App';
import routes from './routes';

const getAppContainer = () => {
  let appContainer = document.getElementById("app") as Element;
  if (!appContainer) console.error("No #route element found in hydrated app");
  return appContainer;
}

const currentPath = new SimpleObservable("/");

let initialRouteNode: Element | null = document.getElementById("route");

let routeNode: Element;

if (initialRouteNode) {
  console.log("App was SSRed, hydrating");
  //App was SSRed, so we need to hydrate it

  //Copy SSRed route
  const liveApp = App(currentPath);
  let deadRouteNode = initialRouteNode;
  routeNode = liveApp.querySelector("#route") as Element;
  if (!routeNode) console.error("No #route element found in hydrated app");
  routeNode.parentElement?.replaceChild(deadRouteNode, routeNode);

  //Insert live app
  let appContainer = getAppContainer();
  appContainer.innerHTML = ""
  appContainer.appendChild(liveApp);
}
else {
  console.log("App was not SSRed, building");
  //App was not SSRed, so we need to build it from scratch
  const app = App(currentPath);
  getAppContainer().appendChild(app);
  routeNode = document.getElementById("route") as Element;
  if (!routeNode) console.error("No #route element found in app");
}

let isFirstLoad = true;

if (routeNode) {
  for (let route of routes) {
    page(route.path, (ctx, next) => {
      currentPath.set(route.path);
      let newNode = route.builder(ctx, next);
      routeNode.parentElement?.replaceChild(newNode, routeNode);
      routeNode = newNode;
    });
  }
}
page();