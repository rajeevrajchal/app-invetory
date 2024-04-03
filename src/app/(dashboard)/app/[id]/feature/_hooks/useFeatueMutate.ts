"use client";

import FeatureService from "@/api/services/feature.service";
import AppRoute from "@/routes/route.constant";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useFeatureMutate = (id: string) => {
  const router = useRouter();

  const addFeatureInSystem = useMutation({
    mutationFn: (payload: any) => FeatureService.create(payload),
    onSuccess: () => {
      router.push(AppRoute.app_feature(id));
    },
  });

  return {
    addFeatureInSystem,
  };
};

export default useFeatureMutate;
