import Menu from "@/components/menu";
import ConfirmationModal from "@/components/modal/confirmation-modal";
import { SYSTEM_STATUS } from "@/enum/system-status.enum";
import AppRoute from "@/routes/route.constant";
import { $FIX_ME } from "@/types/fix-me";
import { ActionIcon, Button, Flex, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEye, FaRegPauseCircle } from "react-icons/fa";
import { GrMultiple } from "react-icons/gr";
import { LiaFeatherAltSolid } from "react-icons/lia";
import { MdDelete, MdEdit, MdSettingsBackupRestore } from "react-icons/md";
import useSystemMutate from "../_hooks/use-system-mutate";

interface SystemListActionProps {
  system_id: string;
  status: SYSTEM_STATUS;
  isDeleted: boolean;
  onRow?: boolean;
}

export type SYSTEM_MODAL = "delete" | "pause" | "restore" | "re-active";

const SystemListAction = (props: SystemListActionProps) => {
  const { system_id, status, isDeleted, onRow } = props;
  const pathname = usePathname();

  const [modal, setModal] = useState<SYSTEM_MODAL | null>(null);
  const { deleteSystem, reStoreSystem, updateSystem } = useSystemMutate();

  const matches = useMediaQuery("(min-width: 900px)");

  const handleModalClose = () => {
    setModal(null);
  };

  const handleModalOpen = (key: SYSTEM_MODAL) => {
    setModal(key);
  };

  const getMenuViaRole: any = [
    {
      leftSection: <MdEdit size={18} />,
      children: <Text className="capitalize">Edit</Text>,
      component: "a",
      href: AppRoute.system_edit(system_id),
      allow: "*",
      disable: status === SYSTEM_STATUS.ON_HOLD || isDeleted,
    },
    {
      leftSection: <FaEye size={18} />,
      children: <Text className="capitalize">Detail</Text>,
      component: "a",
      href: AppRoute.system_detail(system_id),
      allow: "*",
      disable: pathname.includes(`system/${system_id}`),
    },
    {
      leftSection: <GrMultiple size={18} />,
      children: <Text className="capitalize">Sub system</Text>,
      component: "a",
      href: AppRoute.system_sub_system(system_id),
      allow: "*",
      disable: false,
    },
    {
      leftSection: <LiaFeatherAltSolid size={18} />,
      children: <Text className="capitalize">Features</Text>,
      component: "a",
      href: AppRoute.system_feature(system_id),
      allow: "*",
      disable: false,
    },
    {
      leftSection: <FaRegPauseCircle size={18} />,
      children: (
        <Text className="capitalize">
          {status === SYSTEM_STATUS.ON_HOLD ? "Re-Active" : "Hold"}
        </Text>
      ),
      component: "button",
      onClick: () =>
        handleModalOpen(
          status === SYSTEM_STATUS.ON_HOLD ? "re-active" : "pause"
        ),
      allow: "*",
      disable: isDeleted,
    },
    {
      leftSection: isDeleted ? (
        <MdSettingsBackupRestore size={18} />
      ) : (
        <MdDelete size={18} className="text-red-600" />
      ),
      children: (
        <Text className={`capitalize ${!isDeleted && "text-red-600"}`}>
          {isDeleted ? "Restore" : "Delete"}
        </Text>
      ),
      component: "button",
      onClick: () => handleModalOpen(isDeleted ? "restore" : "delete"),
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

  const confirmation_modal: Record<
    SYSTEM_MODAL,
    {
      title: string;
      description: string;
      loading: boolean;
      confirm: () => void;
    }
  > = {
    delete: {
      title: "Delete System",
      description: "Delete this system",
      loading: deleteSystem.isPending,
      confirm: () => {
        deleteSystem.mutate(system_id, {
          onSuccess: () => {
            handleModalClose();
          },
        });
      },
    },
    pause: {
      title: "Pause System",
      description: "This is hold",
      loading: updateSystem.isPending,
      confirm: () => {
        updateSystem.mutate({
          system: {
            status: SYSTEM_STATUS.ON_HOLD,
          },
          id: system_id,
        });
      },
    },
    restore: {
      title: "Restore System",
      description: "Restore",
      loading: reStoreSystem.isPending,
      confirm: () => {
        reStoreSystem.mutate(system_id, {
          onSuccess: () => {
            handleModalClose();
          },
        });
      },
    },
    "re-active": {
      title: "Reactive System",
      description: "Re-active",
      loading: updateSystem.isPending,
      confirm: () => {
        updateSystem.mutate({
          system: {
            status: SYSTEM_STATUS.ACTIVE,
          },
          id: system_id,
        });
      },
    },
  };

  if (onRow && matches) {
    return (
      <>
        <Flex gap="sm">
          {getMenuViaRole.map((item: $FIX_ME, index: number) => {
            return (
              <Button
                variant="outline"
                size="xs"
                key={`menu-${index}`}
                {...item}
              >
                {item.children}
              </Button>
            );
          })}
        </Flex>
        {modal !== null && (
          <ConfirmationModal
            opened
            close={handleModalClose}
            title={confirmation_modal[modal]?.title}
            description={confirmation_modal[modal]?.description}
            confirm={confirmation_modal[modal]?.confirm}
            loading={confirmation_modal[modal]?.loading}
          />
        )}
      </>
    );
  }

  return (
    <>
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
      {modal !== null && (
        <ConfirmationModal
          opened
          close={handleModalClose}
          title={confirmation_modal[modal]?.title}
          description={confirmation_modal[modal]?.description}
          confirm={confirmation_modal[modal]?.confirm}
          loading={confirmation_modal[modal]?.loading}
        />
      )}
    </>
  );
};

export default SystemListAction;
