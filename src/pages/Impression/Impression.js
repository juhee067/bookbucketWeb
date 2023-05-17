import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faArrowCircleLeft,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import "./impression.scss";

const Impression = (props) => {
  let navigate = useNavigate();

  // textValue
  let [textAreaValue, setTextAreaValue] = useState("");
  let [saveContent, setSaveContent] = useState(false);

  // texValue Change
  const handleChange = (e) => {
    setTextAreaValue(e.target.value);
  };

  // text save
  const saveRealization = () => {
    if (textAreaValue) {
      setTextAreaValue(textAreaValue);
      window.localStorage.setItem("content", textAreaValue);
      setSaveContent(true);
      alert("느낀점이 저장되었습니다.");
    } else if (textAreaValue === "") {
      window.localStorage.setItem("content", textAreaValue);
      alert("느낀점을 작성해주세요");
    }
  };

  localStorage.setItem(props.listBook, textAreaValue);

  return (
    <div className="impression">
      <div className="bg center">
        {" "}
        <div className="container">
          {" "}
          <div className="textBox">
            <form>
              <label htmlFor="story">느낀점</label>
              <textarea
                id="story"
                name="realization"
                value={textAreaValue}
                onChange={handleChange}
                placeholder="느낀 점을 작성해주세요"
              ></textarea>
            </form>
            <div className="icon">
              {" "}
              <FontAwesomeIcon
                icon={faArrowCircleLeft}
                className="arrowLeft cursor"
                onClick={() => {
                  navigate("/");
                }}
              />
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="circleCheck cursor "
                onClick={saveRealization}
              />
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Impression;
