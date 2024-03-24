"use client";
import SystemService from "@/api/services/system.service";
import AppRoute from "@/routes/route.constant";
import { useMutation } from "@tanstack/react-query";
import { omit } from "lodash";
import { useRouter } from "next/navigation";

const useSubAppMutate = () => {
  const router = useRouter();

  const createSubApp = useMutation({
    mutationFn: (payload: any) =>
      SystemService.sub_app_create(omit(payload, ["id"]), payload.id),
    onSuccess: () => {
      router.push(AppRoute.app);
    },
  });
  return {
    createSubApp,
  };
};

export default useSubAppMutate;
