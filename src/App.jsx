import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
