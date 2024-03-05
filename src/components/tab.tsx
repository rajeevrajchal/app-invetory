import { Tabs } from "@mantine/core";
import { filter } from "lodash";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLayoutEffect } from "react";

export type TabItem = {
  label: string;
  value: string;
  disabled?: boolean;
  component?: JSX.Element;
  icon?: JSX.Element;
};

interface TabProps {
  tabs: TabItem[];
  initial?: string | null;
  noPanel?: boolean;
}

const Tab = (props: TabProps) => {
  const { tabs, initial, noPanel = false } = props;

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeTab = searchParams.get("tab") || tabs[0]?.value;

  const changeTab = (value?: string | null) => {
    if (value && value !== null) {
      router.push(`${pathname}?tab=${value}`, undefined);
    } else {
      router.push(pathname, undefined);
    }
  };

  useLayoutEffect(() => {
    changeTab(searchParams.get("tab") ? searchParams.get("tab") : initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tabs value={activeTab} onChange={changeTab} w="100%">
      <Tabs.List
        style={{
          width: "fit-content",
        }}
      >
        {filter(tabs, (item) => !item.disabled).map((tab) => (
          <Tabs.Tab
            key={tab.value}
            value={tab.value}
            leftSection={tab?.icon}
            className="capitalize"
            disabled={tab?.disabled}
          >
            {tab.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {!noPanel &&
        tabs.map((tab) => (
          <Tabs.Panel key={tab.value} value={tab.value} mt="md">
            {tab.component}
          </Tabs.Panel>
        ))}
    </Tabs>
  );
};

export default Tab;
