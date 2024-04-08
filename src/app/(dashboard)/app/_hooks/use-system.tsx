import SystemService from "@/api/services/system.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const useSystem = () => {
  const param = useParams();
  const system_id = param.id || "";

  const system_query = useQuery({
    queryKey: ["system.detail", system_id],
    queryFn: () => SystemService.detail(system_id as string),
    enabled: !!system_id,
  });

  return {
    loading:
      system_query.isLoading ||
      system_query.isFetching ||
      system_query.isRefetching,
    system: system_query.data,
  };
};

export default useSystem;
