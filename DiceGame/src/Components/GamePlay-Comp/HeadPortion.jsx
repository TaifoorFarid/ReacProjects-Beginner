import styled from "styled-components";

const HeadPortion = ({ error, score, selected, setSelected }) => {
  const diceNumbers = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error ? <P>You have not selected any number</P> : <></>}
      <Container>
        <Score>
          <h1>{score}</h1>
          <p>Total Score</p>
        </Score>
        <Numbers>
          <main>
            {diceNumbers.map((value, i) => (
              <Box
                selected={selected}
                onClick={() => setSelected(value)}
                id={i + 1}
              >
                {value}
              </Box>
            ))}
          </main>
          <p>Select Number</p>
        </Numbers>
      </Container>
    </>
  );
};

export default HeadPortion;

const P = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: red;
  text-align: end;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    height: 120px;
    font-size: 100px;
    font-weight: 500;
  }

  P {
    font-weight: 450;
  }
`;

const Box = styled.div`
  background-color: ${(props) =>
    props.selected == props.id ? "black" : "white"};
  color: ${(props) => (props.selected == props.id ? "white" : "black")};
  display: flex;
  width: 72px;
  height: 72px;
  border: 2px solid black;
  font-size: 24px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const Numbers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;

  main {
    width: 100%;
    display: flex;
    gap: 24px;
    border: none;
  }

  p {
    font-weight: 600;
    font-size: 20px;
  }
`;
