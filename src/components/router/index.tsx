import { Route, Routes } from "react-router-dom";
import MyFlights from "../../pages/MyFlights";
import Booking from "../../pages/Booking";

const routes = [
  {
    key: "Booking",
    path: "/",
    element: <Booking />,
  },
  {
    key: "MyFlights",
    path: "/MyFlights",
    element: <MyFlights />,
  },
  {
    key: "*",
    path: "*",
    element: <Booking />,
  },
];

const Router = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
            key={route.key}
            path={route.path}
            element={route.element}
        />
      ))}
    </Routes>
  );
};

export default Router;
