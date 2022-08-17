import { Route, Routes } from "react-router-dom";
import Main from "./Pages/MainPage/Main";
import Monthly from "./Pages/MonthlyPage/Monthly";
import Daily from "./Pages/DailyPage/Daily";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/monthly" element={<Monthly />}></Route>
      <Route path="/daily" element={<Daily />}></Route>
    </Routes>
  );
}

export default App;
