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
    </header>
  );
};
