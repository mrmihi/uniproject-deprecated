import { Route, Routes, useLocation } from "react-router-dom";
import { Y3S2 } from "../dashboards";


const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path="*" element={<Y3S2 />} />
    </Routes>
  );
};

export default AnimatedRoutes;
