import { getSystemData } from "./action";

const SystemDetail = async (props: { params: { id: string } }) => {
  const system = await getSystemData(props.params.id);
  return <pre>{JSON.stringify(system, null, 2)}</pre>;
};

export default SystemDetail;