"use client";

import { SYSTEM } from "@/model/system.model";
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
import { isEmpty } from "lodash";
import { useRouter } from "next/navigation";
import createSystemValidation from "../_validation/create-system.validation";

interface CreateSystemFrom {
  data?: Partial<SYSTEM>;
  handleSubmit: {
    mutate: (val: $FIX_ME) => void;
    isPending: boolean;
  };
}
const CreateSystemFrom = (props: CreateSystemFrom) => {
  const { data, handleSubmit } = props;
  const router = useRouter();

  const systemForm = useFormik({
    initialValues: {
      name: data?.name || "",
      domain: data?.domain || "",

      location: data?.location || "",
      repository: data?.repository || "",
      branch: data?.branch || "",

      description: data?.description || "",
    },
    validationSchema: createSystemValidation,
    onSubmit: (values) => {
      handleSubmit.mutate(values);
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
            {isEmpty(data) ? "Add System" : "Update System"}
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
            <Grid.Col
              span={{
                base: 12,
                md: 6,
              }}
            >
              <TextInput
                label="Repository"
                placeholder="Repository (Where your code lives)"
                name="repository"
                onChange={systemForm.handleChange}
                value={systemForm.values.repository}
                error={
                  systemForm.touched?.repository &&
                  systemForm.errors?.repository &&
                  systemForm.errors?.repository
                }
              />
            </Grid.Col>
          </Grid>
        </Fieldset>
        <Textarea
          label="Description (Optional)"
          placeholder="About system."
          name="description"
          autosize={true}
          onChange={systemForm.handleChange}
          value={systemForm.values.description}
        />
      </Stack>
    </form>
  );
};

export default CreateSystemFrom;
