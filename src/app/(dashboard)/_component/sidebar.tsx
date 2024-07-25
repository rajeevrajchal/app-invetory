import { SidebarItem, sidebarMenu } from "@/constant/sidebar";
import useAuth from "@/hook/store/use-auth";
import {
  AppShell,
  Avatar,
  Box,
  Burger,
  Center,
  Flex,
  NavLink,
  Stack,
} from "@mantine/core";
import { usePathname } from "next/navigation";

interface SidebarProps {
  desktopOpened: boolean;
  mobileOpened: boolean;
  toggleMobileOpened: () => void;
}

const Sidebar = (props: SidebarProps) => {
  const { desktopOpened, mobileOpened, toggleMobileOpened } = props;
  const pathname = usePathname();
  const { loginUser } = useAuth();

  const getSideMenuViaRole: SidebarItem[] = sidebarMenu.filter((item) => {
    if (item?.allow === "*") {
      return true;
    } else {
      return item?.allow?.includes(loginUser?.role?.toLowerCase())
        ? true
        : false;
    }
  });

  return (
    <AppShell.Navbar py="xs">
      <Stack gap="xs" h="100%">
        <Box px="md">
          <Flex
            direction={{ base: "column", sm: "row" }}
            align="flex-end"
            justify="space-between"
          >
            <Burger
              opened={mobileOpened}
              onClick={toggleMobileOpened}
              hiddenFrom="sm"
              size="sm"
            />
            {desktopOpened ? (
              <Center w="100%">
                <Avatar src="/logo.png" alt="Ati-nova" size="xl" />
              </Center>
            ) : (
              <Center w="100%">
                <Avatar src="/logo.png" alt="Ati-nova" size="xl" />
              </Center>
            )}
          </Flex>
        </Box>
        <Stack px="md" className="h-full">
          {getSideMenuViaRole.map((item: SidebarItem, index: number) => (
            <div key={`${item.key}-${index}`}>
              <NavLink
                label={item.label}
                leftSection={item.icon}
                variant="filled"
                active={
                  (pathname.startsWith(item.href) &&
                    item.href !== "/" &&
                    pathname.includes(`${item.href}/`)) ||
                  pathname === item.href
                }
                style={{
                  borderRadius: "4px",
                }}
                tt="capitalize"
                h="lg"
                py="md"
                href={`${item.href}`}
                key={`${item.key}-${index}`}
              />
            </div>
          ))}
        </Stack>
      </Stack>
    </AppShell.Navbar>
  );
};

export default Sidebar;
