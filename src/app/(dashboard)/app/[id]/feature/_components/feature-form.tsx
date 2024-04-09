"use client";

import { FEATURE } from "@/model/feature.model";
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

interface FeatureCreateFormProps {
  data?: FEATURE;
  system_id: string;
  handleSubmit: {
    mutate: (val: $FIX_ME) => void;
    isPending: boolean;
  };
}

const FeatureCreateForm = (props: FeatureCreateFormProps) => {
  const { system_id, data, handleSubmit } = props;
  const router = useRouter();

  const featureForm = useFormik({
    initialValues: {
      name: data?.name || "",
      key: data?.key || "",
      description: data?.description || "",
      is_active: data?.is_active || false,
    },
    onSubmit: (values) => {
      handleSubmit.mutate({
        ...values,
        system_id: system_id,
      });
    },
  });

  return (
    <form onSubmit={featureForm.handleSubmit}>
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
                placeholder="Feature Name"
                name="name"
                onChange={featureForm.handleChange}
                value={featureForm.values.name}
                withAsterisk
                error={
                  featureForm.touched?.name &&
                  featureForm.errors?.name &&
                  featureForm.errors?.name
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
                label="Feature Key [Unique Identifier]"
                placeholder="Feature Key"
                name="key"
                onChange={featureForm.handleChange}
                value={featureForm.values.key}
              />
            </Grid.Col>
          </Grid>
        </Fieldset>
        <Textarea
          label="Description (Optional)"
          placeholder="About Feature."
          name="description"
          autosize={true}
          onChange={featureForm.handleChange}
          value={featureForm.values.description}
        />
      </Stack>
    </form>
  );
};

export default FeatureCreateForm;
