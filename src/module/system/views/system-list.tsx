import Table from "@components/table";
import { formatDate } from "@utils/functions/format-date";
import { DataTableColumn } from "mantine-datatable";
import SystemFilter from "../components/system-filter";

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
      label="Systems"
      headerContent={<SystemFilter />}
      columns={column}
      data={[]}
    />
  );
};

export default SystemList;
