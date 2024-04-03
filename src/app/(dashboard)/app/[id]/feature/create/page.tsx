"use client";

import FeatureCreateForm from "../_components/feature-form";
import useFeatureMutate from "../_hooks/useFeatueMutate";

const FeatureCreate = (props: { params: { id: string } }) => {
  const { addFeatureInSystem } = useFeatureMutate(props.params.id);
  return (
    <FeatureCreateForm
      handleSubmit={addFeatureInSystem}
      system_id={props.params.id}
    />
  );
};

export default FeatureCreate;
