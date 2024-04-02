import SubSystemService from "@/api/services/sub-system.service";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const useSubSystem = (id: string) => {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab");

  const system_query = useQuery({
    queryKey: ["sub-system.all", activeTab, id],
    queryFn: () => SubSystemService.all(id, activeTab || ""),
  });

  return {
    loading:
      system_query.isLoading ||
      system_query.isFetching ||
      system_query.isRefetching,
    systems: system_query.data,
  };
};

export default useSubSystem;
