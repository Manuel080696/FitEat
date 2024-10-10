import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { MenuBar } from "../components/MenuBar";
import { useEffect, useState } from "react";

function Root() {
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState(location);
  console.log(currentLocation);

  useEffect(() => {
    setCurrentLocation(location?.pathname);
  }, [location]);

  return currentLocation === "/camera" ? (
    <div id="root">
      <Outlet />
      <MenuBar location={currentLocation} />
    </div>
  ) : (
    <div id="root">
      <Header />
      <Outlet />
      <MenuBar location={currentLocation} />
    </div>
  );
}

export default Root;
