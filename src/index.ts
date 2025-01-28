import { route } from "@marcomit/core";
import AboutPage from "./components/about";
import LibrariesPage from "./components/libraries";
import DocsPage from "./pages/docs";
import HomePage from "./pages/home";

route({
  "/": () => new HomePage(),
  "/docs": () => new DocsPage(),
  "/about": () => new AboutPage(),
  "/libraries": () => new LibrariesPage(),
});

console.log("Tee Framework Landing Page Loaded!");
