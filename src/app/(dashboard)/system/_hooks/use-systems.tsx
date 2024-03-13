import SystemService from "@/api/services/system.service";
import { useQuery } from "@tanstack/react-query";

const useSystem = () => {
  const system_query = useQuery({
    queryKey: ["system.all"],
    queryFn: () => SystemService.all(),
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
