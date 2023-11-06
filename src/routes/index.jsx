import { Route, Routes, useLocation } from "react-router-dom";
import { ThreeTwo } from "../dashboards";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path="*" element={<ThreeTwo />} />
    </Routes>
  );
};

export default AnimatedRoutes;
