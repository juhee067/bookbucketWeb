import React from "react";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import "./impression.scss";
const Impression = () => {
  return (
    <div className="impression">
      <div className="bg center">
        {" "}
        <div className="container">
          {" "}
          <div className="textBox">
            <label for="story">느낀점</label>

            <textarea id="story" name="story">
              책에 대한 느낀점을 작성해주세요
            </textarea>
            <FontAwesomeIcon
              icon={faCirclePlus}
              className="circlePlus cursor "
            />
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Impression;
