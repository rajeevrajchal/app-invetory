"use client";

import Table from "@/components/table";
import { $FIX_ME } from "@/types/fix-me";
import { DataTableColumn } from "mantine-datatable";

interface TeamListsProps {
  teams: $FIX_ME;
}

const column: DataTableColumn[] = [
  {
    accessor: "name",
    title: "Name",
    sortable: true,
    textAlign: "left",
    ellipsis: true,
  },
  {
    accessor: "id",
    title: "",
    textAlign: "left",
    ellipsis: true,
    render: () => {
      return <p>Actions</p>;
    },
  },
];

const TeamLists = (props: TeamListsProps) => {
  const { teams } = props;

  return <Table columns={column} data={teams || []} />;
};

export default TeamLists;
