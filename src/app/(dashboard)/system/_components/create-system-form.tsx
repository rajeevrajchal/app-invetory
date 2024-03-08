"use client";

import { $FIX_ME } from "@/types/fix-me";
import {
  Button,
  Fieldset,
  Flex,
  Grid,
  Stack,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

interface CreateSystemFrom {
  handleSubmit: {
    mutate: (val: $FIX_ME) => void;
    isPending: boolean;
  };
}
const CreateSystemFrom = (props: CreateSystemFrom) => {
  const { handleSubmit } = props;
  const router = useRouter();

  const systemForm = useFormik({
    initialValues: {
      name: "",
      domain: "",

      location: "",
      repository: "",
      branch: "",

      description: "",
    },
    onSubmit: (values) => {
      console.log("the values", values);
      handleSubmit.mutate({
        payload: values,
      });
    },
  });

  return (
    <form onSubmit={systemForm.handleSubmit}>
      <Stack>
        <Flex justify="flex-end" gap="md">
          <Button
            disabled={handleSubmit.isPending}
            variant="outline"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            loading={handleSubmit.isPending}
            disabled={handleSubmit.isPending}
          >
            Add System
          </Button>
        </Flex>
        <Fieldset legend="System Information">
          <Grid>
            <Grid.Col
              span={{
                base: 12,
                md: 6,
              }}
            >
              <TextInput
                label="Name"
                placeholder="System Name"
                name="name"
                onChange={systemForm.handleChange}
                value={systemForm.values.name}
                withAsterisk
                error={
                  systemForm.touched?.name &&
                  systemForm.errors?.name &&
                  systemForm.errors?.name
                }
              />
            </Grid.Col>
            <Grid.Col
              span={{
                base: 12,
                md: 6,
              }}
            >
              <TextInput
                label="Domain"
                placeholder="System Domain"
                name="domain"
                onChange={systemForm.handleChange}
                value={systemForm.values.domain}
                withAsterisk
                error={
                  systemForm.touched?.domain &&
                  systemForm.errors?.domain &&
                  systemForm.errors?.domain
                }
              />
            </Grid.Col>
            <Grid.Col
              span={{
                base: 12,
                md: 6,
              }}
            >
              <TextInput
                label="Location"
                placeholder="Location [Hosted zone]"
                name="location"
                withAsterisk
                onChange={systemForm.handleChange}
                value={systemForm.values.location}
                error={
                  systemForm.touched?.location &&
                  systemForm.errors?.location &&
                  systemForm.errors?.location
                }
              />
            </Grid.Col>
          </Grid>
        </Fieldset>
        <Textarea
          label="Description (Optional)"
          placeholder="About system."
          name="description"
          onChange={systemForm.handleChange}
          value={systemForm.values.description}
        />
      </Stack>
    </form>
  );
};

export default CreateSystemFrom;
