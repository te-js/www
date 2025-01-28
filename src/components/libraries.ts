import { DefaultComponent, div } from "@marcomit/core";
import Footer from "./footer";
import Header from "./header";

class LibrariesPage extends DefaultComponent {
  build() {
    return div(Header(), "Libraries Page", Footer());
  }
}

export default LibrariesPage;
