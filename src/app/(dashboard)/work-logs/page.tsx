"use client";
import FloatingButton from "@/components/floating-button";
import SearchInput from "@/components/search-input";
import { Flex, SimpleGrid, Stack, TagsInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useState } from "react";
const WorkLogs = () => {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const [active, setActive] = useState<string>("summary");

  return (
    <Stack>
      <Flex gap="md" justify="space-between" align="center">
        <FloatingButton
          setActive={setActive}
          active={active}
          options={[
            {
              label: "Summary",
              value: "summary",
            },
            {
              label: "Detailed",
              value: "detailed",
            },
          ]}
        />
        <SimpleGrid cols={3}>
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
            miw="20vw"
            value={value}
            onChange={setValue}
            placeholder="Pick date"
          />
        </SimpleGrid>
      </Flex>
    </Stack>
  );
};

export default WorkLogs;
