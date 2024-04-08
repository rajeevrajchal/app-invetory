"use client";

import SearchInput from "@/components/search-input";
import { Button, Flex } from "@mantine/core";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

interface FeatureFilterProps {
  create_app_label?: string;
  create_app_url?: string;
}

const FeatureFilter = (props: FeatureFilterProps) => {
  const { create_app_label, create_app_url } = props;
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <Flex align="center" gap="md">
      <SearchInput query={searchQuery} setQuery={setSearchQuery} />
      <Button
        leftSection={<IoMdAdd size={14} />}
        variant="light"
        component="a"
        href={create_app_url}
      >
        {create_app_label || "Add Feature"}
      </Button>
    </Flex>
  );
};

export default FeatureFilter;
