"use client";

import Tab from "@/components/tab";
import Table from "@/components/table";
import { formatDate } from "@/utils/functions/format-date";
import { DataTableColumn } from "mantine-datatable";

import { FaRegCircleStop } from "react-icons/fa6";
import { IoStopwatchOutline } from "react-icons/io5";
import { PiArchiveDuotone } from "react-icons/pi";

import CustomBadge from "@/components/custom-badge";
import {
  SYSTEM_STATUS_COLOR,
  SYSTEM_STATUS_NAME,
} from "@/enum/system-status.enum";
import { SYSTEM } from "@/model/system.model";
import AppRoute from "@/routes/route.constant";
import { Anchor, Badge, Flex, Text } from "@mantine/core";
import { FaExternalLinkAlt } from "react-icons/fa";
import SystemFilter from "../../_components/system-filter";
import SystemListAction from "../../_components/system-list-action";
import useSubSystem from "../../_hooks/use-sub-system";

const column: DataTableColumn[] = [
  {
    accessor: "name",
    title: "Project",
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
      const { status, deletedAt } = record;
      const statusColor = SYSTEM_STATUS_COLOR[status];

      return (
        <Flex align="center" gap="md">
          <CustomBadge
            tooltip={String(SYSTEM_STATUS_NAME?.[status] || "")}
            color={statusColor}
          >
            {SYSTEM_STATUS_NAME[status]}
          </CustomBadge>
          {deletedAt && (
            <Badge color="red" py="sm">
              <Flex align="center" gap="xs">
                <Text size="xs" className="capitalize">
                  Deleted @ {formatDate(deletedAt)}
                </Text>
              </Flex>
            </Badge>
          )}
        </Flex>
      );
    },
  },
  {
    accessor: "domain",
    title: "Domain",
    sortable: true,
    textAlign: "left",
    ellipsis: true,
    render: (record: any) => {
      const { domain } = record;
      return (
        <Anchor href={domain} target="_blank" underline="never">
          <Flex gap="md" align="center">
            <Text>{domain} </Text>
            <FaExternalLinkAlt />
          </Flex>
        </Anchor>
      );
    },
  },
  {
    accessor: "createdAt",
    title: "Created At",
    sortable: true,
    textAlign: "left",
    ellipsis: true,
    render: (record: any) => formatDate(record.createdAt),
  },
  {
    accessor: "id",
    title: "",
    textAlign: "left",
    width: 50,
    ellipsis: true,
    render: (record: any) => {
      const { id, status, deletedAt } = record as SYSTEM;
      return (
        <SystemListAction
          isDeleted={deletedAt !== null}
          status={status}
          app_id={id}
        />
      );
    },
  },
];

const SubSystem = (props: { params: { id: string } }) => {
  const {
    params: { id },
  } = props;
  const { loading, systems } = useSubSystem(id);

  return (
    <Table
      headerLeftContent={
        <Tab
          noPanel
          tabs={[
            {
              label: "Active",
              value: "active",
              icon: <IoStopwatchOutline size={22} />,
            },
            {
              label: "On Hold",
              value: "on_hold",
              icon: <FaRegCircleStop size={18} />,
            },
            {
              label: "Archived",
              value: "archived",
              icon: <PiArchiveDuotone size={20} />,
            },
          ]}
          initial="active"
        />
      }
      fetching={loading}
      headerContent={
        <SystemFilter
          create_app_label="Create Sub App"
          create_app_url={AppRoute.create_sub_app(id)}
        />
      }
      columns={column}
      data={systems || []}
    />
  );
};

export default SubSystem;
