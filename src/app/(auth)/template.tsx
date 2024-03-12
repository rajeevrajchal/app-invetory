"use client";
import ColorSwitch from "@/components/color-switch";
import {
  Container,
  Flex,
  Stack,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { PropsWithChildren } from "react";

const AuthTemplate = (props: PropsWithChildren) => {
  const { children } = props;
  const { colorScheme } = useMantineColorScheme();

  return (
    <div className="w-full h-screen flex flex-col gap-4">
      <div className="py-3">
        <Container>
          <Flex justify="space-between">
            <Title order={4}>AtiNova</Title>
            <ColorSwitch />
          </Flex>
        </Container>
      </div>
      <Stack justify="center" align="center" className=" h-full">
        {children}
      </Stack>
    </div>
  );
};

export default AuthTemplate;
