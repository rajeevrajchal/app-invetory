import { formatDate } from "@/utils/functions/format-date";
import {
  ActionIcon,
  Anchor,
  Button,
  Flex,
  Grid,
  GridCol,
  Stack,
  Text,
} from "@mantine/core";
import { FaEdit } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import SystemHeader from "../_components/system-header";
import { getSystemData } from "./action";

const SystemDetail = async (props: { params: { id: string } }) => {
  const system = await getSystemData(props.params.id);

  return (
    <Stack>
      <SystemHeader system={system} />
      <Stack gap={0}>
        <Grid>
          <GridCol span={1}>
            <Text>Created At</Text>
          </GridCol>
          <GridCol span={8}>
            <Text>{formatDate(system.createdAt)}</Text>
          </GridCol>
        </Grid>
        <Grid>
          <GridCol span={1}>
            <Text>Domain</Text>
          </GridCol>
          <GridCol span={8}>
            {system.domain ? (
              <Flex gap="md" align="center">
                <Anchor href={system.domain} target="_blank" underline="never">
                  <Text>{system.domain} </Text>
                </Anchor>
                <ActionIcon variant="subtle">
                  <FaEdit size={20} />
                </ActionIcon>
              </Flex>
            ) : (
              <Button leftSection={<IoMdAdd />}>Add Domain</Button>
            )}
          </GridCol>
        </Grid>
        <Grid>
          <GridCol span={1}>
            <Text>Repository</Text>
          </GridCol>
          <GridCol span={8}>
            <Text>{system.repository || "-"}</Text>
          </GridCol>
        </Grid>
        <Stack gap={0} mt="md">
          <Text>About System</Text>
          <Text size="sm" ta="justify">
            {system.description}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SystemDetail;
