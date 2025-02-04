import { useState } from "react";
import Home from "./Components/Home";
import GamePlay from "./Components/GamePlay";

function App() {
  const [isPlayNowButtonClicked, setIsPlayNowButtonClicked] = useState(false);

  const clickButton = () => {
    setIsPlayNowButtonClicked(
      (isPlayNowButtonClicked) => !isPlayNowButtonClicked
    );
  };
  return (
    <>
      {isPlayNowButtonClicked ? (
        <GamePlay />
      ) : (
        <Home clickButton={clickButton} />
      )}
    </>
  );
}

export default App;
