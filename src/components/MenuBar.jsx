import "boxicons";
import { useNavigate } from "react-router-dom";

export const MenuBar = ({ location }) => {
  const navigate = useNavigate();

  return (
    <section>
      <ul className="flex flex-row items-center justify-center w-full h-16 fixed bottom-0 bg-white px-4 py-8 border-t-2 text-center gap-4">
        <ul className="flex flex-row items-center justify-center gap-4">
          <li
            className="flex flex-col items-center justify-center gap-1"
            onClick={() => navigate("/")}
          >
            {location === "/" ? (
              <box-icon name="home" type="solid" color="#505050"></box-icon>
            ) : (
              <box-icon name="home" type="solid" color="#908f8f"></box-icon>
            )}
            <p>Home</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-1">
            <box-icon name="search-alt-2" color="#908f8f"></box-icon>
            <p>Search</p>
          </li>
        </ul>

        <li
          className={`flex flex-column items-center justify-center w-16 h-16 rounded-full mb-12 ${
            location === "/camera"
              ? "bg-red-500 border-8 border-red-300"
              : "bg-gray-400 border-8"
          }`}
          onClick={() => navigate("/camera")}
        >
          {location === "/camera" ? null : (
            <box-icon name="camera" color="#ffffff"></box-icon>
          )}
        </li>

        <ul className="flex flex-row items-center justify-center gap-4">
          <li className="flex flex-col items-center justify-center gap-1">
            <box-icon name="basket" color="#908f8f"></box-icon>
            <p>Diet</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-1">
            <box-icon name="user" color="#908f8f"></box-icon>
            <p>Profile</p>
          </li>
        </ul>
      </ul>
    </section>
  );
};
