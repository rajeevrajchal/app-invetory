import { Stack } from "@mantine/core";
import SystemHeader from "../_components/system-header";
import { getSystemData } from "./action";

const SystemDetail = async (props: { params: { id: string } }) => {
  const system = await getSystemData(props.params.id);
  return (
    <Stack>
      <SystemHeader system={system} />
    </Stack>
  );
};

export default SystemDetail;
