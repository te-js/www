import { DefaultComponent, div } from "@marcomit/core";
import Footer from "../components/footer";
import Header from "../components/header";

class DocsPage extends DefaultComponent {
  build() {
    return div(Header(), "Docs Page", Footer());
  }
}

export default DocsPage;
