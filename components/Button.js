export default function Button({ title, onClick, style }) {
  const baseStyle = {
    backgroundColor: "grey",
    borderRadius: "5px",
  };
  return {
    type: "button",
    attributes: {
      style: { ...baseStyle, ...style },
    },
    events: {
      click: onClick,
    },
    children: [title],
  };
}

Button.propTypes = {
  title: "string",
  onClick: "function",
  style: "object",
};

export default function Button(props) {
  for (let key in Button.propTypes) {
    if (typeof props[key] !== Button.propTypes[key]) {
      console.log(
        `Invalid prop ${key} for Button component. Expected ${
          Button.propTypes[key]
        }, received ${typeof props[key]}`
      );
    }
  }
  const baseStyle = {
    backgroundColor: "grey",
    borderRadius: "5px",
  };
  return {
    type: "button",
    attributes: {
      style: { ...baseStyle, ...props.style },
    },
    events: {
      click: props.onClick,
    },
    children: [props.title],
  };
}
