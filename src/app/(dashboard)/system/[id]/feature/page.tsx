"use client";

import CustomBadge from "@/components/custom-badge";
import Table from "@/components/table";
import { Flex, Stack } from "@mantine/core";
import { DataTableColumn } from "mantine-datatable";

const features: DataTableColumn[] = [
  {
    accessor: "name",
    title: "Features",
    sortable: true,
    textAlign: "left",
    ellipsis: true,
  },
  {
    accessor: "key",
    title: "Key",
    sortable: true,
    textAlign: "left",
    ellipsis: true,
  },
  {
    accessor: "description",
    title: "Description",
    sortable: true,
    textAlign: "left",
    ellipsis: true,
  },
  {
    accessor: "status",
    title: "Status",
    sortable: true,
    textAlign: "left",
    ellipsis: true,
    render: (record: any) => {
      const { status } = record;
      const statusColor = "$555555";

      return (
        <Flex align="center" gap="md">
          <CustomBadge tooltip={status} color={statusColor}>
            {status}
          </CustomBadge>
        </Flex>
      );
    },
  },
  {
    accessor: "id",
    title: "",
    textAlign: "left",
    width: 50,
    ellipsis: true,
    render: () => {
      return <p>The action</p>;
    },
  },
];

const SystemFeatures = () => {
  return (
    <Stack>
      <Table columns={features} data={[]} />
    </Stack>
  );
};

export default SystemFeatures;
