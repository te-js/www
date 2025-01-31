import { DefaultComponent, div } from "@marcomit/core";
import Footer from "../components/footer";
import Header from "../components/header";

class LibrariesPage extends DefaultComponent {
  build() {
    return div(Header(), "Libraries Page", Footer());
  }
}

export default LibrariesPage;
