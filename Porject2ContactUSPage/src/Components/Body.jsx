import "./Body.css";
import UpperBody from "./UpperBody";
import LowerBody from "./LowerBody";

export default function () {
  return (
    <>
      <div className="body">
        <UpperBody />
        <LowerBody />
      </div>
    </>
  );
}
