import NotFound from "@components/errors/not-found";
import { Route, Routes } from "react-router-dom";
import SystemCreate from "./views/system-create";
import SystemList from "./views/system-list";

const System = () => {
  return (
    <Routes>
      <Route index element={<SystemList />} />
      <Route path="create" element={<SystemCreate />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default System;
