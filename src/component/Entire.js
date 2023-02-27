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
              <div
                key={book.id}
                className={`bucket cursor img2 center ${
                  props.minusBtn ? "on" : ""
                } ${book.isClicked === false ? "oc" : ""} ${
                  book.Whether ? "done" : ""
                }`}
                onClick={() => {
                  props.toggleIsOn(book.id);
                  props.toggleAttribute(book.id, props.isStampBtnActive);
                  // props.navigate("/impression");
                  //  console.log(props.isStampBtnActive);
                }}
              >
                <FontAwesomeIcon
                  icon={book.bookMark ? solidStar : regularStar}
                  className="fastar cursor"
                  onClick={() => {
                    props.toggleAttribute(book.id, false);
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

export default Entire;
