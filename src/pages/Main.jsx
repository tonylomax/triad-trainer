import React from "react";
import TriadToGuess from "../components/TriadToGuess";
import TriadChoices from "../components/TriadChoices";

export default function Main() {
  return (
    <>
      <text> Triad Trainer</text>
      <TriadToGuess />
      <TriadChoices />
    </>
  );
}
