import DashboardLayout from "@layout/dashboard.layout";
import Home from "@module/home";
import System from "@module/system";
import { Route, Routes } from "react-router-dom";
import AppRoute from "./route.constant";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={AppRoute.home} element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="system" element={<System />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
