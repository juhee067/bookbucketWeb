import React from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import book from "../../data/Book";
import "./main.scss";
import Entire from "../../component/Entire";
import Finish from "../../component/Finish";
import Bookmark from "../../component/Bookmark";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faCircleCheck,
  faSquareCheck,
  faSquareMinus,
  faMagnifyingGlass,
  faXmark,
  faEraser,
  faStamp,
} from "@fortawesome/free-solid-svg-icons";

//import { faStar } from "@fortawesome/free-regular-svg-icons";
const Main = () => {
  // 변수
  // 경로 이동
  let navigate = useNavigate();
  // 정규식
  let pattern = /([^0-9a-zA-Z가-힣\x20])/i;
  // ---usestate
  // plus button
  let [isPlusBtnActive, setIsPlusBtnActive] = useState(false);
  // minus button
  let [isMinusBtnActive, setIsMinusBtnActive] = useState(false);
  // stamp button
  let [isStampBtnActive, setIsStampBtnActive] = useState(false);
  // input value
  let [addInputValue, setAddInputValue] = useState("");
  // book data
  let [listBook, setListBook] = useState(book);
  //book id
  const [bookId, setBookId] = useState(listBook.length);
  //tab
  let [tab, setTab] = useState(0);
  //search
  let [isSearchBtn, setIsSearchBtn] = useState(false);
  // input search
  let [searchInputValue, setSearchInputValue] = useState("");
  //search filter
  const searchedBookList = listBook.filter((item) => {
    return item.title.includes(searchInputValue.toLowerCase());
  });

  //------------useref
  const titleInputRef = useRef(null);
  const searchInputRef = useRef(null);

  // ---------------------useEffect
  // input focus
  useEffect(() => {
    titleInputRef.current.focus();
  }, [isPlusBtnActive, addInputValue]);
  useEffect(() => {
    searchInputRef.current.focus();
  }, [isSearchBtn, searchInputValue]);

  // --------함수 생성
  // 정규식 테스트
  const validateInput = () => {
    if (pattern.test(addInputValue)) {
      alert("자음, 모음만 있는 한글은 처리하지 않습니다");
      setAddInputValue("");
      return titleInputRef.current.focus();
    }
    if (!addInputValue) {
      alert("도서를 입력해주세요");
      return titleInputRef.current.focus();
    }
    return true;
  };

  //도서 추가 text 창 띄우기
  const addBookOpenInput = () => {
    setIsPlusBtnActive(true);
    // 도서 추가 인풋 열렸을 때 검색창 누르면 검색창 상태값 변경
    if (isSearchBtn) {
      setIsSearchBtn(!isSearchBtn);
    }
  };

  //도서 추가
  const addBook = () => {
    addBookOpenInput();
    if (isPlusBtnActive && validateInput()) {
      let copy = [...listBook];
      copy.unshift({
        id: bookId,
        title: addInputValue,
        isClicked: true,
        isStamp: false,
        isBookMark: false,
      });
      setListBook(copy);
      increaseId();
      setAddInputValue("");
    }
    if (!isPlusBtnActive) {
      setAddInputValue("");
    }
  };

  // 엔터로 도서 추가
  const addEnter = () => {
    if (window.event.keyCode === 13) {
      addBook();
    }
  };

  //input value change
  const inputText = (e) => {
    setAddInputValue(e.target.value);
  };

  // listBook.id lncrease
  const increaseId = () => {
    if (isPlusBtnActive) {
      let copy = bookId;
      copy++;
      setBookId(copy);
    }
  };
  // input close
  const closeInput = () => {
    setIsPlusBtnActive(false);
  };
  // 도서 삭제

  //도서 클릭 시 isClicked true에서 false 만들기
  const toggleIsOn = (book) => {
    if (isMinusBtnActive) {
      let copy = [...listBook];
      const mathId = copy.find((el) => el.id === book);
      mathId.isClicked = !mathId.isClicked;
      setListBook(copy);
    }
  };
  //선택한 도서 삭제하기
  const deleteBook = () => {
    setIsMinusBtnActive(!isMinusBtnActive);
    if (isMinusBtnActive) {
      setIsSearchBtn(!isSearchBtn);
    }
    if (!isMinusBtnActive) {
      return;
    }
    let copy = [...listBook];
    let saveContent = [...listBook].filter((el) => el.isClicked === true);
    // 선택한 것이 없을 때 alert창을 안띄우기
    console.log(!saveContent.length);
    if (copy.length === saveContent.length) {
      return;
    } else {
      if (window.confirm("정말 삭제하시겠습니까?!")) {
        setListBook(saveContent);
      }
    }
  };
  //stamp 찍기
  // stamp 창 열기
  const stamp = () => {
    setIsStampBtnActive(!isStampBtnActive);
    if (isStampBtnActive) {
      setIsSearchBtn(!isSearchBtn);
    }
  };
  const attachStamp = (stamp) => {
    if (isStampBtnActive) {
      let copy = [...listBook];
      const mathId = copy.find((el) => el.id === stamp);
      mathId.isStamp = !mathId.isStamp;
      setListBook(copy);
    }
  };
  // 글쓰기 btn

  // bookmark
  const bookMark = (mark) => {
    if (isStampBtnActive === false) {
      let copy = [...listBook];
      const mathId = copy.find((el) => el.id === mark);
      mathId.isBookMark = !mathId.isBookMark;
      setListBook(copy);
    }
  };
  // stamp & book mark
  // const toggleAttribute = (id, attribute) => {
  //   let copy = [...listBook];
  //   const mathId = copy.find((el) => el.id === id);

  //   if (attribute === "isBookMark") {
  //     mathId.isBookMark = !mathId.isBookMark;
  //   } else if (attribute === "isStamp") {
  //     mathId.isStamp = !mathId.isStamp;
  //   }
  //   //  mathId.isBookMark = !mathId.isBookMark;

  //   setListBook(copy);
  // };

  //영한 오빠
  const toggleAttribute = (id, attribute) => {
    let copy = [...listBook];
    const mathId = copy.find((el) => el.id === id);
    mathId[attribute] = !mathId[attribute];
    setListBook(copy);
  };
  // };

  //tab 선택
  const selectTab = (index) => {
    setTab(index);
  };
  // tabMenu
  const menuArr = [
    {
      name: "전체보기",
      content: (
        <Entire
          attachStamp={attachStamp}
          bookMark={bookMark}
          listBook={listBook}
          isMinusBtnActive={isMinusBtnActive}
          toggleIsOn={toggleIsOn}
          toggleAttribute={toggleAttribute}
          searchInputValue={searchInputValue}
          searchedBookList={searchedBookList}
          navigate={navigate}
        />
      ),
    },
    {
      name: "즐겨찾기",
      content: (
        <Bookmark
          attachStamp={attachStamp}
          bookMark={bookMark}
          listBook={listBook}
          isMinusBtnActive={isMinusBtnActive}
          toggleIsOn={toggleIsOn}
          toggleAttribute={toggleAttribute}
          searchInputValue={searchInputValue}
          searchedBookList={searchedBookList}
          navigate={navigate}
        />
      ),
    },
    {
      name: "독서완료",
      content: (
        <Finish
          attachStamp={attachStamp}
          bookMark={bookMark}
          listBook={listBook}
          toggleIsOn={toggleIsOn}
          toggleAttribute={toggleAttribute}
          searchInputValue={searchInputValue}
          searchedBookList={searchedBookList}
          navigate={navigate}
        />
      ),
    },
  ];
  //bookSearch
  const searchBook = () => {
    if (isPlusBtnActive) {
      setIsPlusBtnActive(!isPlusBtnActive);
    }
    if (isMinusBtnActive) {
      setIsMinusBtnActive(!isMinusBtnActive);
    }
    if (isStampBtnActive) {
      setIsStampBtnActive(!isStampBtnActive);
    }
    if (!isSearchBtn) {
      setSearchInputValue("");
    }
    setIsSearchBtn(!isSearchBtn);
  };
  //search text
  const getValue = (e) => {
    setSearchInputValue(e.target.value.toLowerCase());
  };

  return (
    <div className="main">
      {" "}
      <div className="bg center">
        {" "}
        <div className="container">
          {" "}
          <p className="msg">2023년에 읽을 도서</p>
          <div className="icon">
            {" "}
            <FontAwesomeIcon
              icon={isPlusBtnActive ? faCircleCheck : faCirclePlus}
              className={`circlePlus cursor ${isMinusBtnActive || isStampBtnActive ? "on" : ""} `}
              onClick={addBook}
            />
            <FontAwesomeIcon
              icon={isMinusBtnActive ? faSquareCheck : faSquareMinus}
              className={`squareMinus cursor ${isPlusBtnActive || isStampBtnActive ? "on" : ""}`}
              onClick={deleteBook}
            />{" "}
            <FontAwesomeIcon
              icon={isStampBtnActive ? faCircleCheck : faStamp}
              className={`stamp cursor ${isPlusBtnActive || isMinusBtnActive ? "on" : ""}`}
              onClick={stamp}
            />
          </div>
          <div className={`registration ${isPlusBtnActive ? "on" : ""}`}>
            <input
              type="text"
              placeholder="읽을 책을 입력하세요"
              value={addInputValue}
              onChange={(e) => inputText(e)}
              ref={titleInputRef}
              onKeyPress={addEnter}
            />
            <button
              className="clearBtn"
              onClick={() => {
                setAddInputValue("");
                titleInputRef.current.focus();
              }}
            >
              {" "}
              <FontAwesomeIcon icon={faEraser} className="faEraser cursor" />
            </button>
            <button className="inputCloseBtn" onClick={closeInput}>
              {" "}
              <FontAwesomeIcon icon={faXmark} className="faXmark cursor" />
            </button>
          </div>
          <div className="category">
            <div className="menu">
              {menuArr.map((el, index) => {
                return (
                  <li
                    key={el.name}
                    className={index === tab ? "focused" : ""}
                    onClick={() => selectTab(index)}
                  >
                    {el.name}
                  </li>
                );
              })}
            </div>

            <div className="search">
              {" "}
              <div
                className={`in ${
                  isPlusBtnActive === false &&
                  isMinusBtnActive === false &&
                  isStampBtnActive === false &&
                  isSearchBtn
                    ? "on"
                    : ""
                }`}
              >
                <input
                  type="text"
                  placeholder="책을 검색하세요"
                  value={searchInputValue}
                  onChange={(e) => getValue(e)}
                  ref={searchInputRef}
                  onKeyPress={addEnter}
                  className="searchInput"
                />
                <button
                  className="clearBtn"
                  onClick={() => {
                    setSearchInputValue("");
                    searchInputRef.current.focus();
                  }}
                >
                  {" "}
                  <FontAwesomeIcon icon={faEraser} className="faEraser cursor" />
                </button>
              </div>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="faMagnifyingGlass cursor"
                onClick={searchBook}
              />
            </div>
          </div>
          <div className="row flex-row wrap">
            <div>{menuArr[tab].content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
