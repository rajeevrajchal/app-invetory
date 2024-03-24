"use client";

import CreateSystemFrom from "../../../_components/create-system-form";
import useSubAppMutate from "../../../_hooks/use-sub-app-mutate";

const CreateSubApp = (props: { params: { id: string } }) => {
  const {
    params: { id },
  } = props;
  const { createSubApp } = useSubAppMutate();

  return <CreateSystemFrom app_id={id} handleSubmit={createSubApp} />;
};

export default CreateSubApp;
