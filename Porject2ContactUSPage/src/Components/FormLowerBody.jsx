import Button from "./Button/Button";
import { HiAnnotation } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import Input from "./Input/Input";
import { useState } from "react";

export default function () {
  const [name, setName] = useState("Kashif");
  const [email, setEmail] = useState("Kashif@gmail.com");
  const [text, setText] = useState("Hello");
  const viaChat = () => {
    alert("Via support chat button clicked");
  };

  const viaCall = () => {
    alert("Via cal button clicked");
  };

  const viaEmail = () => {
    alert("Via Email button clicked");
  };

  const onsubmit = (e) => {
    // e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  };

  return (
    <div className="form" style={{ marginTop: "20px" }}>
      <div className="buttons">
        <div className="upper-buttons" style={{ marginBottom: "10px" }}>
          <Button
            onClick={viaChat}
            message="VIA SUPPORT CHAT"
            icon={<HiAnnotation fontSize="24px" />}
            color="white"
            bgColor="black"
          />
          <Button
            onClick={viaCall}
            message="VIA CALL"
            icon={<HiPhone fontSize="24px" />}
            color="white"
            bgColor="black"
          />
        </div>
        <Button
          onClick={viaEmail}
          message="VIA EMAIL FORM"
          icon={<HiAnnotation fontSize="24px" />}
          color="black"
          bgColor="white"
        />
      </div>
      <form action="form" onSubmit={onsubmit}>
        <Input text="Name" height="34px" />
        <Input text="E-Mail" height="34px" />
        {/* <Input text="Text" height="125px" /> */}
        <div className="textArea">
          <label htmlFor="text" className="textArea-lable">
            Text
          </label>
          <textarea id="text" name="Text" rows={5}></textarea>
        </div>
        <div style={{ width: "40px" }}>
          <Button message="Submit" icon={null} color="white" bgColor="black" />
        </div>
      </form>
      <div>{name}</div>
      <div>{email}</div>
      <div>{text}</div>
    </div>
  );
}
