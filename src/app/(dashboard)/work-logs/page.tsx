"use client";

import FloatingButton from "@/components/floating-button";
import { Flex, Stack } from "@mantine/core";
import { notFound, useSearchParams } from "next/navigation";
import LogFilter from "./components/log-filter";
import MyWorkLogs from "./components/my-work-log";
import TeamWorkLog from "./components/team-work-log";

const getActiveTab = (active: string | null) => {
  switch (active) {
    case "my":
      return <MyWorkLogs />;
    case "team":
      return <TeamWorkLog />;
    default:
      return notFound();
  }
};

const WorkLogs = () => {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "my";

  return (
    <Stack>
      <Flex justify="space-between" gap="lg">
        <FloatingButton
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
        <LogFilter />
      </Flex>
      {getActiveTab(activeTab)}
    </Stack>
  );
};

export default WorkLogs;
