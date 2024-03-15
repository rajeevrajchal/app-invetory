import SystemService from "@/api/services/system.service";
import AppRoute from "@/routes/route.constant";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useSystemMutate = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const createSystem = useMutation({
    mutationFn: (payload) => SystemService.create(payload),
    onSuccess: () => {
      router.push(AppRoute.system);
    },
  });

  const updateSystem = useMutation({
    mutationFn: (payload: { system: any; id: string }) =>
      SystemService.update(payload.system, payload.id),
    onSuccess: () => {
      router.push(AppRoute.system);
    },
  });

  const deleteSystem = useMutation({
    mutationFn: (id: string) => SystemService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["system.all"],
      });
    },
  });

  const reStoreSystem = useMutation({
    mutationFn: (id: string) => SystemService.re_store(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["system.all"],
      });
    },
  });

  return {
    createSystem,
    updateSystem,
    deleteSystem,
    reStoreSystem,
  };
};

export default useSystemMutate;
