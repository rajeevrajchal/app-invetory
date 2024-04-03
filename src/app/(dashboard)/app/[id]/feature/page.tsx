import FeatureTable from "./_components/feature-table";
import { getSystemFeatures } from "./action";

const SystemFeatures = async (props: { params: { id: string } }) => {
  const features = await getSystemFeatures(props.params.id);
  return <FeatureTable features={features} system_id={props.params.id} />;
};

export default SystemFeatures;
