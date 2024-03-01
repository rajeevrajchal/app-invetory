import AppRoute from "@routes/route.constant";
import { ReactElement } from "react";
import { AiOutlinePieChart } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { FaUsersRectangle } from "react-icons/fa6";
import { GiSolarSystem } from "react-icons/gi";
import { GrSchedule } from "react-icons/gr";
import { LiaFileContractSolid } from "react-icons/lia";
import { TiVendorMicrosoft } from "react-icons/ti";

export interface SidebarItem {
  icon: ReactElement;
  label: string;
  key: string;
  href: string;
  allow?: string[] | string;
}

export const sidebarMenu: SidebarItem[] = [
  {
    icon: <AiOutlinePieChart size={22} />,
    label: "Home",
    key: "home",
    href: AppRoute.home,
    allow: "*",
  },
  {
    icon: <GiSolarSystem size={22} />,
    label: "Systems",
    key: "system",
    href: AppRoute.system,
    allow: "*",
  },
  {
    icon: <FaUsers size={22} />,
    label: "Clients",
    key: "clients",
    href: AppRoute.clients,
    allow: "*",
  },
  {
    icon: <LiaFileContractSolid size={24} />,
    label: "Contracts",
    key: "contracts",
    href: AppRoute.contracts,
    allow: "*",
  },
  {
    icon: <GrSchedule size={22} />,
    label: "Jobs",
    key: "schedule",
    href: AppRoute.schedule,
    allow: "*",
  },
  {
    icon: <FaUsersRectangle size={22} />,
    label: "Users",
    key: "users",
    href: AppRoute.users,
    allow: "*",
  },
  {
    icon: <TiVendorMicrosoft size={22} />,
    label: "Vendors",
    key: "vendors",
    href: AppRoute.vendors,
    allow: "*",
  },
];
