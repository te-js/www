import {
  a,
  DefaultComponent,
  div,
  h1,
  h2,
  h3,
  main,
  p,
  section,
  span,
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

  build() {
    return main(
      { class: "flex min-h-screen flex-col" },
      Header(),
      // Hero Section
      section(
        {
          class:
            "flex flex-col items-center justify-center gap-4 px-6 py-32 bg-white dark:bg-black",
        },
        span(
          { class: "rounded-full bg-gray-900 px-3 py-1 text-sm text-white" },
          "Announcing our next release"
        ),
        h1(
          {
            class:
              "text-center text-5xl font-bold tracking-tight lg:text-7xl text-black dark:text-white",
          },
          "Build faster with",
          span({ class: "text-blue-600" }, " Tee Framework")
        ),
        p(
          {
            class:
              "max-w-[42rem] text-center text-xl text-gray-600 dark:text-gray-400",
          },
          "A production-ready web framework that lets you build performant and scalable applications with ease."
        ),
        div(
          { class: "flex gap-4 mt-4" },
          a(
            {
              href: "/docs",
              class:
                "rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors",
            },
            "Get Started"
          ),
          a(
            {
              href: "https://github.com/yourusername/tee-framework",
              class:
                "rounded-lg bg-gray-100 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-200 transition-colors dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700",
            },
            "GitHub"
          )
        )
      ),
      // Features Section
      section(
        { class: "bg-gray-50 dark:bg-gray-900 py-24 px-6" },
        div(
          { class: "mx-auto max-w-7xl" },
          div(
            { class: "text-center mb-16" },
            h2(
              {
                class:
                  "text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl",
              },
              "Everything you need to build modern web apps"
            ),
            p(
              { class: "mt-4 text-lg text-gray-600 dark:text-gray-400" },
              "Tee Framework provides all the features you need for production"
            )
          ),
          div(
            { class: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" },
            this.#FeatureCard(
              "⚡",
              "Fast Refresh",
              "See your changes instantly with our lightning-fast refresh system."
            ),
            this.#FeatureCard(
              "🛠️",
              "Built-in Components",
              "A comprehensive set of UI components ready for production use."
            ),
            this.#FeatureCard(
              "📦",
              "Zero Config",
              "Get started immediately with zero configuration needed."
            ),
            this.#FeatureCard(
              "🔒",
              "Type Safe",
              "Built with TypeScript for better development experience."
            ),
            this.#FeatureCard(
              "📱",
              "Responsive",
              "Create responsive layouts with built-in Tailwind support."
            ),
            this.#FeatureCard(
              "🚀",
              "Production Ready",
              "Optimized for production with automatic performance improvements."
            )
          )
        )
      ),
      Footer()
    );
  }

  #FeatureCard(emoji: string, title: string, description: string) {
    return div(
      {
        class:
          "rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6",
      },
      div({ class: "mb-4 text-3xl" }, emoji),
      h3(
        { class: "mb-2 text-xl font-semibold text-gray-900 dark:text-white" },
        title
      ),
      p({ class: "text-gray-600 dark:text-gray-400" }, description)
    );
  }
}

export default HomePage;
