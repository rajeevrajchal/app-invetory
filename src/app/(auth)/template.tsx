"use client";
import ColorSwitch from "@/components/color-switch";
import {
  Box,
  Center,
  Flex,
  Image,
  Stack,
  useMantineColorScheme,
} from "@mantine/core";
import { PropsWithChildren } from "react";

const AuthTemplate = (props: PropsWithChildren) => {
  const { children } = props;
  const { colorScheme } = useMantineColorScheme();

  return (
    <Box
      style={{
        width: "100vw",
        height: "100vh",
      }}
      bg={colorScheme === "light" ? "#6b63ff" : "transparent"}
    >
      <Flex h="100%" direction={{ base: "column", sm: "row" }}>
        <Stack
          h="100%"
          w="100%"
          display={{ base: "none", sm: "block" }}
          className="bg-red-300"
        >
          <p>the background container</p>
        </Stack>

        <Box
          h="100%"
          bg={colorScheme === "light" ? "white" : "transparent"}
          className="w-full md:w-1/3"
        >
          <Stack justify="center" h="100%">
            <Center>
              <Stack
                w={{ base: "100%", sm: "60%" }}
                px={{ base: "lg", sm: 0 }}
                gap="md"
              >
                <Center>
                  <Box display={{ base: "block", sm: "none" }} w="60%">
                    <Image src="/vercel.svg" alt="AtiNova" />
                  </Box>
                </Center>
                <Flex align="center" justify="flex-end">
                  <ColorSwitch />
                </Flex>
                {children}
              </Stack>
            </Center>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthTemplate;
