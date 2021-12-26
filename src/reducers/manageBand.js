export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case "ADD_BAND":
      return {...state, bands: [...state.bands, action.payload]}
      break;
    case "REMOVE_BAND":
      break;
    default:
      return state;
  }
};
