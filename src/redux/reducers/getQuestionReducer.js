import { ACTIONS } from "../actions/getQuestion";

export const initialState = {
  triads: [
    { A: "A, C# E" },
    { B: "B, D#, F#" },
    { C: "C,E,G" },
    { D: "D, F#, A" },
    { E: "E, G#, B" },
    { F: "F,A,C" },
    { G: "G,B,D" },
    { Amin: "A,C,E" },
    { Bmin: "B,D,F#" },
    { Cmin: "C,Ep,G" },
    { Dmin: "D,F,A" },
    { Emin: "E,G,B" },
    { Fmin: "F,Ap, C" },
    { Gmin: "G,Bp,D" },
    { Aaug: "A,C#,E#" },
    { Baug: "B,D#,F##" },
    { Caug: "C, E, G" },
    { Daug: "C,E,G#" },
    { Eaug: "E,G#,B#" },
    { Faug: "F,A,C#" },
    { Gaug: "G,B,D#" },
    { Adim: "A,C,Ep " },
    { Bdim: "B,D,F" },
    { Cdim: "C,Ep,Gp" },
    { Ddim: "D,F,Ap" },
    { Edim: " E,G,Bp" },
    { Fdim: "E,G,Bp" },
    { Gdim: "G,Bp,Dp" },
  ],
};

export default (state = initialState, action) => {
  console.log("INSIDE REDUCER");

  switch (action.type) {
    case ACTIONS.GET_QUESTION:
      console.log("DATA IS", action.data);
      return state;

    default:
      return state;
  }
};
