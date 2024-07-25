import SystemService from "@/api/services/system.service";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const useSystem = () => {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab");

  const system_query = useQuery({
    queryKey: ["system.all", activeTab],
    queryFn: () => SystemService.all(activeTab || ""),
  });

  return {
    loading:
      system_query.isLoading ||
      system_query.isFetching ||
      system_query.isRefetching,
    systems: system_query.data,
  };
};

export default useSystem;
