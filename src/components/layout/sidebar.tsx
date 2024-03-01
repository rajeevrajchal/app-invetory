import logo from "@assets/react.svg";
import { SidebarItem, sidebarMenu } from "@constant/sidebar";
import useAuth from "@hook/store/use-auth";
import {
  AppShell,
  Box,
  Burger,
  Center,
  Flex,
  Image,
  NavLink,
  Stack,
} from "@mantine/core";
import { useLocation } from "react-router-dom";

interface SidebarProps {
  desktopOpened: boolean;
  mobileOpened: boolean;
  toggleMobileOpened: () => void;
}

const Sidebar = (props: SidebarProps) => {
  const { desktopOpened, mobileOpened, toggleMobileOpened } = props;
  const { pathname } = useLocation();
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
      <Stack gap="xs">
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
              <Center w="100%" h={48}>
                <Image src={logo} h="100%" w="100%" alt="Eco Spark" />
              </Center>
            ) : (
              <Center w="100%" h={48}>
                <Image src={logo} h="100%" alt="Eco Spark" />
              </Center>
            )}
          </Flex>
        </Box>
        <Stack px="md" mt="md">
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
