"use client";

import SearchInput from "@/components/search-input";
import AppRoute from "@/routes/route.constant";
import { Button, Flex } from "@mantine/core";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const SystemFilter = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [status, setStatus] = useState<string | null>(null);

  return (
    <Flex align="center" gap="md">
      <SearchInput query={searchQuery} setQuery={setSearchQuery} />
      <Button
        leftSection={<IoMdAdd size={14} />}
        variant="light"
        component="a"
        href={AppRoute.create_system}
      >
        Create System
      </Button>
    </Flex>
  );
};

export default SystemFilter;
