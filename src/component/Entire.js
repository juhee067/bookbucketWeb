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
        {(props.searchInputValue ? props.searchedBookList : props.listBook).map(
          (book, i) => {
            return (
              <div className="content" key={book.id}>
                <div
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
                <button
                  className={`finishWrite ${book.isStamp ? "active" : ""}`}
                  onClick={() => {
                    props.navigate(`/impression`);
                  }}
                >
                  글쓰기
                </button>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Entire;
