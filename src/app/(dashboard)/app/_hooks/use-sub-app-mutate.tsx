"use client";
import SubSystemService from "@/api/services/sub-system.service";
import AppRoute from "@/routes/route.constant";
import { useMutation } from "@tanstack/react-query";
import { omit } from "lodash";
import { useRouter } from "next/navigation";

const useSubAppMutate = (id: string) => {
  const router = useRouter();

  const createSubApp = useMutation({
    mutationFn: (payload: any) =>
      SubSystemService.create(
        payload.parent_system_id,
        omit(payload, ["parent_system_id"])
      ),
    onSuccess: () => {
      router.push(AppRoute.app_sub_app(id));
    },
  });

  return {
    createSubApp,
  };
};

export default useSubAppMutate;
