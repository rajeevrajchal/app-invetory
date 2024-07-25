"use client";

import SearchInput from "@/components/search-input";
import { SimpleGrid, TagsInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useState } from "react";

const LogFilter = () => {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

  return (
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
  );
};

export default LogFilter;
