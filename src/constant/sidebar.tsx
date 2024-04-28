import AppRoute from "@/routes/route.constant";
import { ReactElement } from "react";
import { AiOutlinePieChart } from "react-icons/ai";
import { FaAppStoreIos, FaNetworkWired, FaUsers } from "react-icons/fa";
import { GoWorkflow } from "react-icons/go";
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
    icon: <FaAppStoreIos size={22} />,
    label: "Apps",
    key: "apps",
    href: AppRoute.app,
    allow: "*",
  },
  {
    icon: <GoWorkflow size={22} />,
    label: "Work Logs",
    key: "work-logs",
    href: AppRoute.work_logs,
    allow: "*",
  },

  {
    icon: <FaNetworkWired size={22} />,
    label: "team",
    key: "team",
    href: AppRoute.team,
    allow: "*",
  },
  {
    icon: <FaUsers size={22} />,
    label: "customer",
    key: "customer",
    href: AppRoute.customer,
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
