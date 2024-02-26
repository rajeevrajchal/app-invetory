import { Box, Center, Flex, Image, Stack } from "@mantine/core";
import { Outlet } from "react-router-dom";

import logo from "@assets/react.svg";

const AuthLayout = () => {
  return (
    <Box
      style={{
        width: "100vw",
        height: "100vh",
      }}
      bg="#6b63ff"
    >
      <Flex h="100%" direction={{ base: "column", sm: "row" }}>
        <Stack h="100%" w="100%" display={{ base: "none", sm: "block" }}>
          <Center
            h="100%"
            style={{
              flex: 1,
            }}
          >
            <Stack gap="xl">
              <Box w={140}>
                <Image src={logo} />
              </Box>
              {/* TODO: Add Content */}
              <div>the content</div>
            </Stack>
          </Center>
        </Stack>

        <Box h="100%" bg="white" w="100%">
          <Stack justify="center" h="100%">
            <Center>
              <Stack
                w={{ base: "100%", sm: "60%" }}
                px={{ base: "lg", sm: 0 }}
                gap="md"
              >
                <Center>
                  <Box display={{ base: "block", sm: "none" }} w="60%">
                    <Image src={logo} />
                  </Box>
                </Center>
                <Outlet />
              </Stack>
            </Center>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthLayout;
