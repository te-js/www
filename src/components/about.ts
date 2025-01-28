import { DefaultComponent, div } from "@marcomit/core";
import Footer from "./footer";
import Header from "./header";

class AboutPage extends DefaultComponent {
  build() {
    return div(Header(), "About Page", Footer());
  }
}

export default AboutPage;
