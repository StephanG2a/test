export function render(vdom, container) {
  const dom =
    vdom.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(vdom.type);

  const isProperty = (key) => key != "children";
  Object.keys(vdom.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = vdom.props[name];
    });

  vdom.props.children.forEach((child) => render(child, dom));

  container.appendChild(dom);
}
