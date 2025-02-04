import styled from "styled-components";

const Rules = () => {
  return (
    <Container>
      <h2>How to play dice game</h2>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>
        after click on dice if selected number is equal to dice number you will
        get same point as dice
      </p>
      <p>if you get wrong guess then 2 point will be dedcuted </p>
    </Container>
  );
};

export default Rules;

const Container = styled.div`
  padding: 20px 20px;
  background-color: #fbf1f1;
  width: 794px;
  margin: 70px auto;

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-weight: 500;
  }
`;
