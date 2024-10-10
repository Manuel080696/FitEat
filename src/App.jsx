import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./pages/Root";
import Login from "./components/Login";
import Register from "./components/Register";
import { Camera } from "./pages/Camera";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/camera" element={<Camera />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
