import React from "react";
import "./entire.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
const bookContent = (props) => {
  return (
    <div className="content" key={props.book.id}>
      {" "}
      <div
        className={`bucket cursor img2 center ${
          props.isMinusBtnActive ? "on" : ""
        } ${props.book.isClicked === false ? "oc" : ""} ${
          props.book.isStamp ? "done" : ""
        }`}
        onClick={() => {
          props.toggleIsOn(props.book.id);
          props.attachStamp(props.book.id);
        }}
      >
        <FontAwesomeIcon
          icon={props.book.isBookMark ? solidStar : regularStar}
          className="fastar cursor"
          onClick={() => {
            props.bookMark(props.book.id);
          }}
        />
        <h4>{props.book.title}</h4>
      </div>
      <button
        className={`finishWrite ${props.book.isStamp ? "active" : ""}`}
        onClick={() => {
          props.navigate(`/impression`);
        }}
      >
        글쓰기
      </button>
    </div>
  );
};

export default bookContent;
