import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Memo from "./components/Memo";
import Ref from "./components/Ref";
import Reducers from "./components/Reducers/Index";
import Callback from "./components/Callback/Index";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Memo />} />
            <Route path="ref" element={<Ref />} />
            <Route path="reducer" element={<Reducers />} />
            <Route path="callback" element={<Callback />} />
          </Route>
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
