import HeadPortion from "./GamePlay-Comp/HeadPortion";
import BodyPortion from "./GamePlay-Comp/BodyPortion";
import Rules from "./GamePlay-Comp/Rules";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

const GamePlay = () => {
  const [selected, setSelected] = useState(0);
  const [img, setImage] = useState(1);
  const [ruleButton, setRuleButton] = useState(false);
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);

  const resetScore = () => {
    setScore(0);
  };

  const changeImage = () => {
    if (selected === 0) {
      setError(true);
      return;
    }
    setError(false);
    setImage(Math.floor(Math.random() * (7 - 1) + 1));
  };

  useEffect(() => {
    if (selected === 0) {
      return;
    } else if (selected === img) {
      setScore((prevScore) => prevScore + img);
    } else {
      setScore((prevScore) => prevScore - 2);
    }
  }, [img]);

  return (
    <Container>
      <HeadPortion
        error={error}
        score={score}
        selected={selected}
        setSelected={setSelected}
      />
      <BodyPortion
        setRuleButton={setRuleButton}
        img={img}
        changeImage={changeImage}
        resetScore={resetScore}
      />
      {ruleButton ? <Rules /> : <></>}
    </Container>
  );
};

export default GamePlay;

const Container = styled.div`
  width: 1280px;
  margin: 64px auto;
`;
