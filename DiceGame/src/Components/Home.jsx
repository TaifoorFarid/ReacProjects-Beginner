import styled from "styled-components";

const Home = ({ clickButton }) => {
  return (
    <Container>
      <div>
        <img src="/Assets/dices.png" alt="dices-image" />
      </div>
      <div>
        <h1>DICE GAME</h1>
        <Button onClick={clickButton}>Play Now</Button>
      </div>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  width: 1182px;
  height: 100vh;
  margin: 0 auto;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 96px;
    white-space: nowrap;
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  border: 1px solid black;
  padding: 10px 18px;
  min-width: 220px;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
