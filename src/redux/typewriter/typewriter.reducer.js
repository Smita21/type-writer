import { GET_TEXT } from "./typewriter.types";

const texts = [
  "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
  "Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.",
  "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.",
  "Angular is a platform for building mobile and desktop web applications.",
  "Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications",
];
const initialState = {
  text: texts[Math.floor(Math.random() * texts.length)],
};

const typewriterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEXT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default typewriterReducer;
