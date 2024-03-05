"use client";

import { usePathname } from "next/navigation";
import { createContext, ReactElement, ReactNode, useContext } from "react";

type Breadcrumb = {
  path: string;
  name: string;
  isActive: boolean;
};

interface BreadcrumbContextType {
  breadcrumbs: Breadcrumb[];
}

const breadCrumbContext = createContext<BreadcrumbContextType>({
  breadcrumbs: [],
});

const { Provider } = breadCrumbContext;

const useBreadcrumbData = () => {
  const pathname = usePathname();

  const paths = pathname.split("/").filter((p: string) => p);
  const breadcrumbs: Breadcrumb[] = [];

  paths.reduce((prevPath: string, currPath: string) => {
    const path = currPath === "document" ? "documents" : currPath;

    const breadcrumbPath = `${prevPath}/${path}`;

    breadcrumbs.push({
      path: breadcrumbPath,
      name: path === "" ? "Home" : !isNaN(Number(path)) ? path : path,
      isActive: breadcrumbPath === pathname,
    });

    return breadcrumbPath;
  }, "");

  return {
    breadcrumbs: [
      {
        path: "/",
        name: "home",
        isActive: pathname === "/",
      },
      ...breadcrumbs,
    ],
  };
};

export const BreadcrumbProvider = ({
  children,
}: {
  children: ReactElement | ReactNode;
}) => {
  const data = useBreadcrumbData();
  return <Provider value={data}>{children}</Provider>;
};

const useBreadcrumb = () => useContext(breadCrumbContext);

export default useBreadcrumb;
