import { footer, p } from "@marcomit/core";

export default function Footer() {
  return footer(
    { class: "py-6 bg-gray-900 text-center text-gray-400" },
    p("© 2024 Tee Framework. Minimalism redefined.")
  );
}
