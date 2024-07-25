"use client";

import CreateSystemFrom from "../_components/create-system-form";
import useSystemMutate from "../_hooks/use-system-mutate";

const SystemCreate = () => {
  const { createSystem } = useSystemMutate();
  return <CreateSystemFrom handleSubmit={createSystem} />;
};

export default SystemCreate;
