import { a, h1, header, li, nav, ul } from "@marcomit/core";

const links = [
  { href: "/", text: "Home" },
  { href: "/docs", text: "Docs" },
  { href: "/about", text: "About" },
  { href: "/libraries", text: "Libraries" },
];

function Link(link: (typeof links)[number]) {
  return li(
    a(
      {
        class: "text-gray-300 hover:text-white",
        href: link.href,
      },
      link.text
    )
  );
}

export default function Header() {
  return header(
    { class: "flex justify-between items-center py-4 bg-gray-900" },
    a(
      { href: "/" },
      h1({ class: "text-2xl font-bold text-white" }, "Tee Framework")
    ),
    nav(
      { class: "space-x-6" },
      ul({ class: "flex space-x-4" }, ...links.map(Link))
    )
  );
}
