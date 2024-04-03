"use client";

import CustomBadge from "@/components/custom-badge";
import Table from "@/components/table";
import AppRoute from "@/routes/route.constant";
import { $FIX_ME } from "@/types/fix-me";
import { Flex } from "@mantine/core";
import { DataTableColumn } from "mantine-datatable";
import FeatureFilter from "./feature-filter";

interface FeatureTableProps {
  features: $FIX_ME;
  system_id: string;
}

const column: DataTableColumn[] = [
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

const FeatureTable = (props: FeatureTableProps) => {
  const { features, system_id } = props;

  return (
    <Table
      columns={column}
      data={features || []}
      headerContent={
        <FeatureFilter
          create_app_label="Add Features"
          create_app_url={AppRoute.create_app_feature(system_id)}
        />
      }
    />
  );
};

export default FeatureTable;
