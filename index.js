// import BrowserRouter from "./components/BrowserRouter.js";
// import routes from "./routes.js";

// const root = document.getElementById("root");

// BrowserRouter(routes, root, root.dataset.baseurl);

import BrowserRouter from "./components/BrowserRouter.js";
import getRoutes from "./routes.js";
import State from "./core/State.js";

const root = document.getElementById("root");
const compteurState = new State(0);
const routes = getRoutes(compteurState);

BrowserRouter(routes, root, root.dataset.baseurl, compteurState);
