import axios from "axios";

export const getAdvice = advice => {
  return (dispatch, getState) => {
    // async
    return axios.get("https://api.adviceslip.com/advice").then(({ data }) => {
      dispatch({
        type: "GET_ADVICE",
        payload: data.slip.advice
      });
    });
  };
};
