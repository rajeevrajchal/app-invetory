"use client";

import { SYSTEM } from "@/model/system.model";
import CreateSystemFrom from "../../_components/create-system-form";
import useSystem from "../../_hooks/use-system";
import useSystemMutate from "../../_hooks/use-system-mutate";

const SystemEdit = (props: { params: { id: string } }) => {
  const { system, loading } = useSystem();
  const { updateSystem } = useSystemMutate();

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <CreateSystemFrom
      data={system as SYSTEM}
      handleSubmit={{
        mutate: (val) =>
          updateSystem.mutate({
            system: val,
            id: props.params.id || "",
          }),
        isPending: updateSystem.isPending,
      }}
    />
  );
};

export default SystemEdit;
