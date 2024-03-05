"use client";

import AppBar from "@/app/(dashboard)/_component/appbar";
import Sidebar from "@/app/(dashboard)/_component/sidebar";
import Breadcrumb from "@/components/breadcrumb";
import { AppShell, Stack } from "@mantine/core";
import { useDisclosure, useLocalStorage } from "@mantine/hooks";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useLayoutEffect, useState } from "react";

const DashboardLayout = (props: PropsWithChildren) => {
  const { children } = props;
  const [appSidebar, setAppSidebar] = useLocalStorage<boolean>({
    key: "app-sidebar",
    defaultValue: false,
  });
  const [desktopOpened, toggleDesktop] = useState<boolean>(false);
  const [mobileOpened, { toggle: toggleMobileOpened }] = useDisclosure(false);
  const pathname = usePathname();

  useLayoutEffect(() => {
    toggleDesktop(appSidebar as boolean);
  }, [appSidebar]);

  return (
    <AppShell
      header={{ height: 48 }}
      padding="md"
      navbar={{
        width: !desktopOpened ? 80 : 248,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened },
      }}
      layout="alt"
    >
      <AppBar
        toggleDesktop={() => {
          toggleDesktop(!desktopOpened);
          setAppSidebar(!desktopOpened);
        }}
        toggleMobileOpened={toggleMobileOpened}
        desktopOpened={desktopOpened}
      />
      <Sidebar
        desktopOpened={desktopOpened}
        mobileOpened={mobileOpened}
        toggleMobileOpened={toggleMobileOpened}
      />
      <AppShell.Main>
        <Stack gap="md">
          {pathname != "/" && <Breadcrumb />}
          {children}
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
};

export default DashboardLayout;
