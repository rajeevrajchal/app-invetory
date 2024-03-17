"use client";

import CustomBadge from "@/components/custom-badge";
import {
  SYSTEM_STATUS_COLOR,
  SYSTEM_STATUS_NAME,
} from "@/enum/system-status.enum";
import { SYSTEM } from "@/model/system.model";
import { formatDate } from "@/utils/functions/format-date";
import { Badge, Flex, Text, Title } from "@mantine/core";
import SystemListAction from "./system-list-action";

interface SystemHeaderProps {
  system: SYSTEM;
}

const SystemHeader = (props: SystemHeaderProps) => {
  const { system } = props;

  return (
    <Flex align="center" justify="space-between">
      <Flex align="center" gap="md">
        <Title order={5}>{system.name}</Title>
        <CustomBadge
          tooltip={String(SYSTEM_STATUS_NAME?.[system.status] || "")}
          color={SYSTEM_STATUS_COLOR[system.status]}
        >
          {SYSTEM_STATUS_NAME[system.status]}
        </CustomBadge>
        {system.deletedAt && (
          <Badge color="red" py="sm">
            <Flex align="center" gap="xs">
              <Text size="xs" className="capitalize">
                Deleted @ {formatDate(system.deletedAt)}
              </Text>
            </Flex>
          </Badge>
        )}
      </Flex>
      <SystemListAction
        onRow={true}
        system_id={system.id}
        status={system.status}
        isDeleted={system.deletedAt !== null}
      />
    </Flex>
  );
};

export default SystemHeader;
