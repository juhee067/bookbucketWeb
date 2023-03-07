import { useNavigate } from "react-router-dom";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

function App() {
  // 경로 이동
  let navigate = useNavigate();

  return (
    <div className="App">
      {" "}
      <div className="bg center">
        <div className="container">
          <h1 className="title">
            <span
              className="cursor"
              onClick={() => {
                navigate("/");
              }}
            >
              2023 독서 계획
            </span>
            <button>
              <FontAwesomeIcon
                icon={faBook}
                className="bookIcon cursor"
                onClick={() => {
                  navigate("/bookSearch");
                }}
              />
            </button>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
