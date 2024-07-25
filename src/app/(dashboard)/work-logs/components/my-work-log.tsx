import Table from "@/components/table";
import { formatDate } from "@/utils/functions/format-date";
import {
  Button,
  Fieldset,
  Flex,
  NumberInput,
  Select,
  Textarea,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { DataTableColumn } from "mantine-datatable";
import { FaPlus } from "react-icons/fa";

const column: DataTableColumn[] = [
  {
    accessor: "date",
    title: "Record Date",
    sortable: true,
    textAlign: "left",
    ellipsis: true,
    render: (record: any) => formatDate(record.date),
  },
  {
    accessor: "week_count",
    title: "Week",
    sortable: true,
    textAlign: "left",
    ellipsis: true,
  },
  {
    accessor: "hours",
    title: "Hours",
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
    accessor: "id",
    title: "",
    textAlign: "left",
    width: 50,
    ellipsis: true,
    render: (record: any) => {
      const { id, status, deletedAt } = record;
      return <p>Actions</p>;
    },
  },
];

const MyWorkLogs = () => {
  return (
    <>
      <Fieldset legend="Insert new record">
        <Flex gap="md" justify="space-between">
          <DatePickerInput flex="1" />
          <Select flex="1" />
          <NumberInput flex="1" min={0} step={0.1} />
          <Textarea flex="1" minRows={1.3} size="xs" autosize />
          <Button leftSection={<FaPlus />}>Add</Button>
        </Flex>
      </Fieldset>

      <Table fetching={false} columns={column} data={[]} />
    </>
  );
};

export default MyWorkLogs;
