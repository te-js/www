import { route } from "@marcomit/core";
import AboutPage from "./pages/about";
import DocsPage from "./pages/docs";
import HomePage from "./pages/home";
import LibrariesPage from "./pages/libraries";

route({
  "/": () => new HomePage(),
  "/docs": () => new DocsPage(),
  "/about": () => new AboutPage(),
  "/libraries": () => new LibrariesPage(),
});
