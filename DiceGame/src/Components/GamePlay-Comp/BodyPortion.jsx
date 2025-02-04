import styled from "styled-components";
const BodyPortion = ({ setRuleButton, img, changeImage, resetScore }) => {
  return (
    <Container>
      <div>
        <img
          onClick={changeImage}
          src={`/Assets/diceFaces/dice_${img}.png`}
          alt="dice_number"
        />
      </div>
      <p>Click on Dice to roll</p>
      <Button black={false} onClick={resetScore}>
        Reset Score
      </Button>
      <Button black={true} onClick={() => setRuleButton(true)}>
        Show Rules
      </Button>
    </Container>
  );
};

export default BodyPortion;

const Button = styled.button`
  background-color: ${(props) => (props.black ? "black" : "white")};
  color: ${(props) => (!props.black ? "black" : "white")};
  font-size: 16px;
  font-weight: 600;
  min-width: 220px;
  padding: 10px 18px;
  border-radius: 5px;
  margin-top: 20px;

  &:active {
    background-color: ${(props) => (props.black ? "white" : "black")};
    color: ${(props) => (!props.black ? "white" : "black")};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 50px auto;
  align-items: center;

  p {
    font-size: 24px;
  }
`;
