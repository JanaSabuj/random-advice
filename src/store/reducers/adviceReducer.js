const initState = {
  advice: ["Hi there beautiful stranger !! Ready to listen to advices ?"]
};

const adviceReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ADVICE":
      return {
        ...state,
        advice: [action.payload]
      };
    default:
      return state;
  }
};

export default adviceReducer;
