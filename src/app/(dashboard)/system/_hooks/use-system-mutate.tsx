import SystemService from "@/api/services/system.service";
import AppRoute from "@/routes/route.constant";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useSystemMutate = () => {
  const router = useRouter();

  const createSystem = useMutation({
    mutationFn: (payload) => SystemService.create(payload),
    onSuccess: () => {
      router.push(AppRoute.system);
    },
  });

  return {
    createSystem,
  };
};

export default useSystemMutate;
