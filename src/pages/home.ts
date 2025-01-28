import {
  button,
  DefaultComponent,
  div,
  h1,
  h2,
  main,
  p,
  section,
} from "@marcomit/core";
import Footer from "../components/footer";
import Header from "../components/header";

class HomePage extends DefaultComponent {
  #counter = this.state(0);
  #activeTab = this.state(0);
  #accordionOpen = this.state(false);

  #incrementCounter() {
    this.#counter.value++;
  }

  #toggleTab(tabIndex: number) {
    this.#activeTab.value = tabIndex;
  }

  #toggleAccordion() {
    this.#accordionOpen.value = !this.#accordionOpen.value;
  }

  async build() {
    return main(
      { class: "landing-page max-w-7xl mx-auto px-4 py-8" },
      // Header with navigation
      Header(),
      // Intro Section
      section(
        { class: "text-center py-16 bg-gray-800" },
        div(
          { class: "max-w-2xl mx-auto" },
          h1(
            { class: "text-4xl font-extrabold text-white mb-4" },
            "Build Fast. Scale Seamlessly."
          ),
          p(
            { class: "text-gray-400 mb-6" },
            "Tee is a modern, lightweight framework that empowers developers to create high-performance applications with ease."
          ),
          button(
            {
              class:
                "bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-600",
              onclick: () => console.log("Get Started clicked"),
            },
            "Get Started"
          )
        )
      ),
      // Features Section
      section(
        { class: "py-16 bg-gray-900 text-gray-300" },
        h2(
          { class: "text-2xl font-bold text-center mb-8 text-white" },
          "Features"
        ),
        div(
          { class: "flex flex-wrap justify-center gap-8" },
          div(
            { class: "bg-gray-800 p-6 rounded-md text-center w-72" },
            h2(
              { class: "text-xl font-semibold text-white mb-2" },
              "⚡ Lightweight"
            ),
            p(
              { class: "text-gray-400" },
              "Optimized for performance and scalability."
            )
          ),
          div(
            { class: "bg-gray-800 p-6 rounded-md text-center w-72" },
            h2(
              { class: "text-xl font-semibold text-white mb-2" },
              "💡 Intuitive"
            ),
            p(
              { class: "text-gray-400" },
              "Built with simplicity and developer experience in mind."
            )
          ),
          div(
            { class: "bg-gray-800 p-6 rounded-md text-center w-72" },
            h2({ class: "text-xl font-semibold text-white mb-2" }, "🌍 Modern"),
            p(
              { class: "text-gray-400" },
              "Designed for the needs of today's web applications."
            )
          )
        )
      ),
      // Showcase Section
      section(
        { class: "py-16 bg-gray-800 text-gray-300" },
        h2(
          { class: "text-2xl font-bold text-center mb-8 text-white" },
          "Showcases"
        ),
        div(
          { class: "space-y-8" },
          div(
            { class: "text-center" },
            h2(
              { class: "text-xl font-semibold text-white mb-2" },
              "Interactive Counter"
            ),
            p({ class: "text-gray-400 mb-4" }, `Count: ${this.#counter.value}`),
            button(
              {
                class:
                  "bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-600",
                onclick: () => this.#incrementCounter(),
              },
              "Increment Counter"
            )
          ),
          div(
            { class: "text-center" },
            h2(
              { class: "text-xl font-semibold text-white mb-2" },
              "Animated Tabs"
            ),
            div(
              { class: "space-x-4 mb-4" },
              button(
                {
                  class: `px-4 py-2 rounded-md ${
                    this.#activeTab.value === 0
                      ? "bg-gray-700 text-white"
                      : "bg-gray-600 text-gray-300"
                  }`,
                  onclick: () => this.#toggleTab(0),
                },
                "Tab 1"
              ),
              button(
                {
                  class: `px-4 py-2 rounded-md ${
                    this.#activeTab.value === 1
                      ? "bg-gray-700 text-white"
                      : "bg-gray-600 text-gray-300"
                  }`,
                  onclick: () => this.#toggleTab(1),
                },
                "Tab 2"
              )
            ),
            p(
              { class: "text-gray-400" },
              this.#activeTab.value === 0
                ? "Content for Tab 1"
                : "Content for Tab 2"
            )
          ),
          div(
            { class: "text-center" },
            h2({ class: "text-xl font-semibold text-white mb-2" }, "Accordion"),
            button(
              {
                class:
                  "bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-600 mb-4",
                onclick: () => this.#toggleAccordion(),
              },
              this.#accordionOpen.value ? "Hide Details" : "Show Details"
            ),
            p(
              { class: "text-gray-400" },
              this.#accordionOpen.value
                ? "This is an example of an accordion, where content can be toggled."
                : null
            )
          )
        )
      ),
      // Footer Section
      Footer()
    );
  }
}

export default HomePage;
