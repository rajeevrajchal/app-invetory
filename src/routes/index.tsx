import DashboardLayout from "@layout/dashboard.layout";
import { Route, Routes } from "react-router-dom";
import AppRoute from "./route.constant";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={AppRoute.home} element={<DashboardLayout />}>
        <Route index element={<p>Hello world</p>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
