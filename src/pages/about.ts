import { DefaultComponent, div } from "@marcomit/core";
import Footer from "../components/footer";
import Header from "../components/header";

class AboutPage extends DefaultComponent {
  build() {
    return div(Header(), "About Page", Footer());
  }
}

export default AboutPage;
