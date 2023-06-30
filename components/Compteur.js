// import Button from "./Button.js";

// export default function Compteur({ initialValue = 0 }) {
//   let compteur = initialValue;

//   return {
//     type: "div",
//     children: [
//       Button({
//         title: "-",
//         style: { backgroundColor: "red" },
//         onClick: () => compteur--,
//       }),
//       `Current compteur: ${compteur}`,
//       Button({
//         title: "+",
//         style: { backgroundColor: "green" },
//         onClick: () => compteur++,
//       }),
//     ],
//   };
// }

import Button from "./Button.js";

export default function Compteur({ compteurState }) {
  return () => ({
    type: "div",
    children: [
      Button({
        title: "-",
        style: { backgroundColor: "red" },
        onClick: () => compteurState.setState(compteurState.getState() - 1),
      }),
      `Current compteur: ${compteurState.getState()}`,
      Button({
        title: "+",
        style: { backgroundColor: "green" },
        onClick: () => compteurState.setState(compteurState.getState() + 1),
      }),
    ],
  });
}
