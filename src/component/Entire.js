import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import "./entire.scss";
const Entire = (props) => {
  return (
    <div className="entire">
      {" "}
      <div className="row flex-row wrap">
        {(props.searchText ? props.searched : props.listBook).map((book, i) => {
          return (
            <div
              className={`bucket cursor img2 center ${
                props.minusBtn ? "on" : ""
              } ${book.isOn === false ? "oc" : ""} ${
                book.Whether ? "done" : ""
              }`}
              onClick={() => {
                props.toggleIsOn(book.id);
                props.attachStamp(book.id);
                // props.navigate("/impression");
              }}
            >
              <FontAwesomeIcon
                icon={book.bookMark ? solidStar : regularStar}
                className="fastar cursor"
                onClick={() => {
                  props.bookMark(book.id);
                }}
              />

              <h4>{book.title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Entire;
