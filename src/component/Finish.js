import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import "./Entire";
const Finish = (props) => {
  let copyListBook = [...props.listBook].filter((el) => {
    return el.isStamp === true;
  });
  let copySearchListBook = [...copyListBook].filter((item) => {
    return item.title.includes(props.searchInputValue.toLowerCase());
  });
  return (
    <div className="finish">
      {" "}
      <div className="row flex-row wrap">
        {(props.searchInputValue ? copySearchListBook : copyListBook).map(
          (book, i) => {
            return (
              <div
                key={book.id}
                className={`bucket cursor img2 center ${
                  props.isMinusBtnActive ? "on" : ""
                } ${book.isClicked === false ? "oc" : ""} ${
                  book.isStamp ? "done" : ""
                }`}
                onClick={() => {
                  props.toggleIsOn(book.id);
                  props.attachStamp(book.id);
                }}
              >
                <FontAwesomeIcon
                  icon={book.isBookMark ? solidStar : regularStar}
                  className="fastar cursor"
                  onClick={() => {
                    props.bookMark(book.id);
                  }}
                />

                <h4>{book.title}</h4>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Finish;
