"use client";
import useEnterKeyPress from "@/hook/utils/use-enter";
import { Button, Fieldset, Stack, Text, TextInput } from "@mantine/core";
import { useFormik } from "formik";
import { MdAlternateEmail } from "react-icons/md";

const ForgetPassword = () => {
  const forgetPassword = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      console.log("the values are", values);
    },
  });

  useEnterKeyPress(forgetPassword.handleSubmit);

  return (
    <Fieldset w={400} radius="md">
      <Stack>
        <Text size="lg">Forget Password</Text>
        <TextInput
          label="Email"
          type="email"
          placeholder="your@email.com"
          name="email"
          leftSection={<MdAlternateEmail />}
          value={forgetPassword.values.email}
          onChange={forgetPassword.handleChange}
          error={
            forgetPassword?.errors.email && forgetPassword?.touched?.email
              ? forgetPassword?.errors.email
              : ""
          }
        />

        <Button
          disabled={false}
          loading={false}
          onClick={() => forgetPassword.handleSubmit()}
        >
          Login
        </Button>
      </Stack>
    </Fieldset>
  );
};

export default ForgetPassword;
