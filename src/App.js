import { Routes, Route, useNavigate } from "react-router-dom";
import "./css/reset.css";
import "./css/common.scss";
import Main from "./pages/Main/Main";
import BookSearch from "./pages/BookSearch/BookSearch";
import Header from "./component/Header";

import Impression from "./pages/Impression/Impression";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {" "}
        <Route path="/" element={<Main />}></Route>
        <Route path="/bookSearch" element={<BookSearch />}>
          {" "}
        </Route>
        <Route path="/impression" element={<Impression />}>
          {" "}
        </Route>
        {/* <Route path="*" element={<div>없는 페이지에요</div>}>
          {" "}
        </Route> */}
      </Routes>{" "}
    </div>
  );
}

export default App;
