"use client";
import FloatingButton from "@/components/floating-button";
import SearchInput from "@/components/search-input";
import Table from "@/components/table";
import { formatDate } from "@/utils/functions/format-date";
import {
  Button,
  Fieldset,
  Flex,
  NumberInput,
  Select,
  SimpleGrid,
  Stack,
  TagsInput,
  Textarea,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { DataTableColumn } from "mantine-datatable";
import { useState } from "react";
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

const WorkLogs = () => {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const [active, setActive] = useState<"my" | "team">("my");

  return (
    <Stack>
      <Flex justify="space-between" gap="lg">
        <FloatingButton
          setActive={setActive}
          active={active}
          options={[
            {
              label: "My",
              value: "my",
            },
            {
              label: "Team",
              value: "team",
            },
          ]}
        />
        <SimpleGrid cols={3} className="flex-1 flex items-end justify-end">
          <SearchInput
            query={""}
            setQuery={(value) => console.log("value", value)}
          />
          <TagsInput
            placeholder="Enter tag"
            defaultValue={["React"]}
            clearable
            data={["React", "Angular", "Vue", "Svelte"]}
          />
          <DatePickerInput
            type="range"
            w="20vw"
            value={value}
            onChange={setValue}
            placeholder="Pick date"
          />
        </SimpleGrid>
      </Flex>
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
    </Stack>
  );
};

export default WorkLogs;
