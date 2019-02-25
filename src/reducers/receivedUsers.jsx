export default (state = [], action) => {
  switch (action.type) {
    case "RECEIVED_USERS":
      return [...state, action.json];
    default:
      return state;
  }
};
