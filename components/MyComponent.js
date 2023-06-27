import { createElement } from "../vdom/createElement.js";

export default function MyComponent() {
  return createElement(
    "div",
    null,
    createElement("h1", null, "Hello, world!"),
    createElement("p", null, "This is a component.")
  );
}
