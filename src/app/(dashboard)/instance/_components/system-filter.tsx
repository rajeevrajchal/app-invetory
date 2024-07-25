"use client";

import SearchInput from "@/components/search-input";
import AppRoute from "@/routes/route.constant";
import { Button, Flex } from "@mantine/core";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

interface SystemFilterProps {
  create_app_label?: string;
  create_app_url?: string;
}

const SystemFilter = (props: SystemFilterProps) => {
  const { create_app_label, create_app_url } = props;
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <Flex align="center" gap="md">
      <SearchInput query={searchQuery} setQuery={setSearchQuery} />
      <Button
        leftSection={<IoMdAdd size={14} />}
        variant="light"
        component="a"
        href={create_app_url || AppRoute.create_instance}
      >
        {create_app_label || "Create App"}
      </Button>
    </Flex>
  );
};

export default SystemFilter;
