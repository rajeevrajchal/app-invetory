import AppRoute from "@routes/route.constant";
import { ReactElement } from "react";
import { AiOutlinePieChart } from "react-icons/ai";
import { GrSystem } from "react-icons/gr";

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
    icon: <GrSystem size={22} />,
    label: "Systems",
    key: "system",
    href: AppRoute.system,
    allow: "*",
  },
];
