"use client";

import Tab from "@/components/tab";
import Table from "@/components/table";
import { formatDate } from "@/utils/functions/format-date";
import { DataTableColumn } from "mantine-datatable";

import { FaRegCircleStop } from "react-icons/fa6";
import { IoStopwatchOutline } from "react-icons/io5";
import { PiArchiveDuotone } from "react-icons/pi";

import SystemFilter from "./_components/system-filter";

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
  },
  {
    accessor: "createdAt",
    title: "Created At",
    sortable: true,
    textAlign: "left",
    ellipsis: true,
    render: (record: any) => formatDate(record.createdAt),
  },
];

const SystemList = () => {
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
      headerContent={<SystemFilter />}
      columns={column}
      data={[]}
    />
  );
};

export default SystemList;
