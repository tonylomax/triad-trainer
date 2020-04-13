// const getQuestion = () => {};

export const ACTIONS = {
  GET_QUESTION: "GET_QUESTION",
};

export function getQuestion(val) {
  console.log("INSIDE ACTION CREATOR");
  return dispatch => {
    dispatch({ type: ACTIONS.GET_QUESTION, data: val });
  };
}
