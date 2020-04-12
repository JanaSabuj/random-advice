import axios from "axios";
import {
  FETCH_ADVICE_REQUEST,
  FETCH_ADVICE_SUCCESS,
  FETCH_ADVICE_FAILURE
} from "../reducers/adviceTypes";

export const getAdvice = () => {
  return dispatch => {
    dispatch(fetchAdviceRequest());
    axios
      .get("https://api.adviceslip.com/advice")
      .then(response => {
        dispatch(fetchAdviceSuccess(response.data.slip.advice));
      })
      .catch(error => {
        dispatch(fetchAdviceFailure(error.message));
      });
  };
};

export const fetchAdviceRequest = () => {
  return {
    type: FETCH_ADVICE_REQUEST
  };
};

export const fetchAdviceSuccess = advice => {
  return {
    type: FETCH_ADVICE_SUCCESS,
    payload: advice
  };
};

export const fetchAdviceFailure = errMsg => {
  return {
    type: FETCH_ADVICE_FAILURE,
    payload: errMsg
  };
};
