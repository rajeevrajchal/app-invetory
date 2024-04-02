"use client";

import useAuth from "@/hook/store/use-auth";
import { Button, Divider, Fieldset, Stack, Text } from "@mantine/core";
import { FcGoogle } from "react-icons/fc";
import LoginForm from "./_components/login-form";

const Login = () => {
  const { google } = useAuth();
  return (
    <Fieldset
      w={{
        base: 340,
        md: 400,
      }}
      radius="md"
    >
      <Stack>
        <Text size="lg">Login</Text>
        <LoginForm />
        <Divider
          labelPosition="center"
          label={
            <Text ta="center" fw="bold">
              OR
            </Text>
          }
        />
        <Stack>
          <Button
            onClick={() => google.mutate()}
            disabled={google.isPending}
            loading={google.isPending}
            leftSection={<FcGoogle size={22} />}
            variant="outline"
          >
            Continue with Google
          </Button>
        </Stack>
      </Stack>
    </Fieldset>
  );
};

export default Login;
