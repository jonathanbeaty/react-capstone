export default (state = [], action) => {
  switch (action.type) {
    case "REQUEST_USERS":
      return [...state, action.payload];
    default:
      return state;
  }
};
