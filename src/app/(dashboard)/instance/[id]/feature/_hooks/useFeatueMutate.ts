"use client";

import FeatureService from "@/api/services/feature.service";
import { messages } from "@/constant/message";
import AppRoute from "@/routes/route.constant";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const useFeatureMutate = (id: string) => {
  const router = useRouter();

  const addFeatureInSystem = useMutation({
    mutationFn: (payload: any) => FeatureService.create(payload),
    onSuccess: () => {
      router.push(AppRoute.instance_feature(id));
    },
  });

  const checkFeatureEnable = useMutation({
    mutationFn: (feature_id: string) =>
      FeatureService.enable_feature(feature_id),
    onSuccess: () => {
      toast.success(messages.feature_change);
      router.refresh();
    },
  });

  return {
    addFeatureInSystem,
    checkFeatureEnable,
  };
};

export default useFeatureMutate;
