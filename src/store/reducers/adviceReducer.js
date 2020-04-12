import {
  FETCH_ADVICE_FAILURE,
  FETCH_ADVICE_SUCCESS,
  FETCH_ADVICE_REQUEST
} from "./adviceTypes";

const initState = {
  loading: false,
  advice: ["Hi there beautiful stranger !! Ready to listen to some advice ?"],
  error: ""
};

const adviceReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ADVICE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_ADVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        advice: action.payload,
        error: ""
      };
    case FETCH_ADVICE_FAILURE:
      return {
        ...state,
        loading: false,
        advice: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default adviceReducer;
