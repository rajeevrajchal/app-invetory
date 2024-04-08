"use client";

import Table from "@/components/table";
import { FEATURE } from "@/model/feature.model";
import AppRoute from "@/routes/route.constant";
import { $FIX_ME } from "@/types/fix-me";
import { Loader, Switch } from "@mantine/core";
import { DataTableColumn } from "mantine-datatable";
import useFeatureMutate from "../_hooks/useFeatueMutate";
import FeatureFilter from "./feature-filter";
import FeatureTableAction from "./feature-table-action";

interface FeatureTableProps {
  features: $FIX_ME;
  system_id: string;
}

const column: DataTableColumn[] = [
  {
    accessor: "name",
    title: "Features",
    sortable: true,
    textAlign: "left",
    ellipsis: true,
  },
  {
    accessor: "key",
    title: "Key",
    sortable: true,
    textAlign: "left",
    ellipsis: true,
  },
  {
    accessor: "is_active",
    title: "Status",
    sortable: true,
    textAlign: "center",
    ellipsis: true,
    render: (record: $FIX_ME) => {
      const { is_active, id, system_id } = record;
      const { checkFeatureEnable } = useFeatureMutate(system_id);

      return (
        <div className="w-full flex items-center justify-center gap-2">
          <Switch
            size="sm"
            onLabel="ON"
            offLabel="OFF"
            checked={is_active}
            disabled={checkFeatureEnable.isPending}
            onChange={() => checkFeatureEnable.mutate(id)}
          />
          {checkFeatureEnable.isPending && <Loader color="blue" size={14} />}
        </div>
      );
    },
  },
  {
    accessor: "description",
    title: "Description",
    sortable: true,
    textAlign: "left",
    ellipsis: true,
  },
  {
    accessor: "id",
    title: "",
    textAlign: "left",
    ellipsis: true,
    render: (record: any) => {
      const { id, system } = record as FEATURE;

      return <FeatureTableAction feature_id={id} app_id={system.id} />;
    },
  },
];

const FeatureTable = (props: FeatureTableProps) => {
  const { features, system_id } = props;
  console.log("teh featues", features);

  return (
    <Table
      columns={column}
      data={features || []}
      headerContent={
        <FeatureFilter
          create_app_label="Add Features"
          create_app_url={AppRoute.create_app_feature(system_id)}
        />
      }
    />
  );
};

export default FeatureTable;
