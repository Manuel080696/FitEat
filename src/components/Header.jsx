import { useNavigate } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="drop-shadow-xl border-b-[1px] border-gray-300">
      <img
        className="logo "
        src="/logo.png"
        alt="logo"
        onClick={() => navigate("/")}
      />
      <h1 className="fitName">FitEat</h1>
      <button
        className="p-2 absolute bg-white top-[1rem] right-[1rem] drop-shadow-xl rounded-full border-2 border-gray-400"
        onClick={() => navigate("/login")}
      >
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVRJREFUSEvVVdFtg0AMtYFByCRNBsFwkzSZhGAGaTpJWQS5NTqqywHnCJWPnoT4OOH3bL/3QDj44MH14SWAtm3LPM9bADgDwKAPIt6qqnpYBE0AZm4AQIvHZxCRrq7rawokCdD3/VlEPrSAiNy0mHaTZVmDiO++E5fqJAnAzMq8mYuHTIPOHkR02erCAvgCgHIcx5NzTmf/e/xe9H4gotOfA2hBZhZ9E9EmUasDnb/uYZp/yLLruqvfw52I3K4OwjHMiomWDIh42b1kZRUwXSPpiOi+W6bzh4cazXKqdZ9csh/Pm4+IhZNVoiLymXLzKoB3sJqstBj6e82mVUcvAMJ4SEWB7qUoilJENDI0BFcVtQBg5sm9P09S36EAwmyKXf0E8Gq+xGMLVRabMgaYwg0ATH3HIMFon8IvBtgMN2vZW+EXA5jhlQJaCz/zj2Yxt+7/P8A3j4TLGYNySI4AAAAASUVORK5CYII=" />
      </button>
    </header>
  );
};
