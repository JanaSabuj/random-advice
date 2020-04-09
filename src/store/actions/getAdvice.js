export const getAdvice = advice => {
  return (dispatch, getState) => {
    // async
    dispatch({
      type: "GET_ADVICE",
      advice: advice
    });
  };
};
