import React from "react";
import MainSlide from "../components/MainSlide";
import SubSlide from "../components/SubSlide";
import Row01 from "./Row01";
import Rnd from "../components/Rnd";
import Sample from "./Sample";
import BestProduct from "./BestProduct";
import Feedback from "./Feedback";
import Recipe from "./Recipe";
import Sns from "./Sns";
function Main() {
  return (
    <>
      <MainSlide></MainSlide>
      <SubSlide></SubSlide>
      <Row01></Row01>
      <Rnd></Rnd>
      <Sample></Sample>
      <BestProduct></BestProduct>
      <Feedback></Feedback>
      <Recipe></Recipe>
      <Sns></Sns>
    </>
  );
}

export default Main;
