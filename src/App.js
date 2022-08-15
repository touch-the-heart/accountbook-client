import { Route, Routes } from "react-router-dom";
import Main from "./Pages/MainPage/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
    </Routes>
  );
}

export default App;
