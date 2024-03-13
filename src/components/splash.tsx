import { Center, Loader, Stack, Text } from "@mantine/core";

const Splash = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Stack>
        <Center>
          <Loader size={44} color="blue" />
        </Center>
        <Text>Ati Nova</Text>
      </Stack>
    </div>
  );
};

export default Splash;
