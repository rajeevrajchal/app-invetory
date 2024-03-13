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
import SystemFilter from "./_components/system-filter";
import SystemListAction from "./_components/system-list-action";
import useSystem from "./_hooks/use-systems";

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
      const { status } = record;
      const statusColor = SYSTEM_STATUS_COLOR[status];
      return (
        <CustomBadge
          tooltip={String(SYSTEM_STATUS_NAME?.[status] || "")}
          color={statusColor}
        >
          {SYSTEM_STATUS_NAME[status]}
        </CustomBadge>
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
      const { id } = record as SYSTEM;
      return <SystemListAction system_id={id} />;
    },
  },
];

const SystemList = () => {
  const { loading, systems } = useSystem();

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
      headerContent={<SystemFilter />}
      columns={column}
      data={systems || []}
    />
  );
};

export default SystemList;
