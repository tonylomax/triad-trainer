import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getQuestion } from "../redux/actions/getQuestion";

export default function TriadToGuess() {
  const number = Math.floor(Math.random() * Math.floor(28));
  const question = useSelector(
    state => state.getQuestionReducer.triads[number]
  );
  const { triad, answer } = question;
  const dispatch = useDispatch();

  console.log("question is", question);
  return (
    <div>
      <tex> Triad to guess</tex>
      <button
        onClick={() => {
          dispatch({ type: "GET_QUESTION", data: { YO: "WASSUP" } });
        }}
      >
        CLICK ME
      </button>
      <text> {triad}</text>
    </div>
  );
}
