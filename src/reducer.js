const init = 0;

export const reducer = (state = init, action) => {
  switch (action.type) {
    case "PLUS":
      return state + action.payload.num;
    case "MINUS":
      return state - action.payload.num;
    default:
      return state;
  }
};
