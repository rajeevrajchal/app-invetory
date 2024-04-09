import Menu from "@/components/menu";
import { ActionIcon, Text } from "@mantine/core";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdEdit } from "react-icons/md";

interface FeatureTableActionProps {
  feature_id: string;
  app_id: string;
}

const FeatureTableAction = (props: FeatureTableActionProps) => {
  const { feature_id, app_id } = props;

  const getMenuViaRole: any = [
    {
      leftSection: <MdEdit size={18} />,
      children: <Text className="capitalize">Edit</Text>,
      component: "button",
      allow: "*",
      onClick: () => console.log("hello edit"),
      disable: false,
    },
  ].filter((item) => {
    if (item?.allow === "*" && !item?.disable) {
      return true;
    } else {
      return !item?.disable ? true : false;
    }
  });

  return (
    <Menu
      trigger={
        <ActionIcon variant="subtle" aria-label="More">
          <BsThreeDotsVertical size={24} />
        </ActionIcon>
      }
      menu={[
        {
          label: "Action",
          items: getMenuViaRole,
        },
      ]}
    />
  );
};

export default FeatureTableAction;
