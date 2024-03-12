"use client";

import { LOGIN_TYPE } from "@/api/types/auth.type";
import useEnterKeyPress from "@/hook/utils/use-enter";
import AppRoute from "@/routes/route.constant";
import {
  Button,
  NavLink,
  PasswordInput,
  Stack,
  TextInput,
} from "@mantine/core";
import { useFormik } from "formik";
import Link from "next/link";
import { MdAlternateEmail, MdLockOpen } from "react-icons/md";

const LoginForm = () => {
  const loginForm = useFormik<LOGIN_TYPE>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("the values are", values);
    },
  });

  useEnterKeyPress(loginForm.handleSubmit);

  return (
    <Stack>
      <TextInput
        label="Email"
        type="email"
        placeholder="your@email.com"
        name="email"
        leftSection={<MdAlternateEmail />}
        value={loginForm.values.email}
        onChange={loginForm.handleChange}
        error={
          loginForm?.errors.email && loginForm?.touched?.email
            ? loginForm?.errors.email
            : ""
        }
      />
      <PasswordInput
        label="Password"
        placeholder="********"
        name="password"
        leftSection={<MdLockOpen />}
        value={loginForm.values.password}
        onChange={loginForm.handleChange}
        error={
          loginForm?.errors.password && loginForm?.touched?.password
            ? loginForm?.errors.password
            : ""
        }
      />
      <NavLink
        p={0}
        w="fit-content"
        label="Forget Password ?"
        component={Link}
        href={AppRoute.forget_password}
        variant="subtle"
      />
      <Button
        disabled={false}
        loading={false}
        onClick={() => loginForm.handleSubmit()}
      >
        Login
      </Button>
    </Stack>
  );
};

export default LoginForm;
