import Menu from "@/components/menu";
import AppRoute from "@/routes/route.constant";
import { ActionIcon, Text } from "@mantine/core";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

interface SystemListActionProps {
  system_id: string;
}

const SystemListAction = (props: SystemListActionProps) => {
  const { system_id } = props;

  const getMenuViaRole: any = [
    {
      leftSection: <MdEdit size={18} />,
      children: <Text className="capitalize">Edit</Text>,
      component: "a",
      href: AppRoute.system_edit(system_id),
      allow: "*",
      disable: false,
    },
    {
      leftSection: <FaEye size={18} />,
      children: <Text className="capitalize">Detail</Text>,
      component: "a",
      href: AppRoute.system_detail(system_id),
      allow: "*",
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

export default SystemListAction;
