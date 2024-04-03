"use server";

import { FEATURE } from "@/model/feature.model";
import serverAxios from "@/plugins/server-axios";
import { METHOD } from "@/types/axios-get";

export async function getSystemFeatures(system_id: string) {
  const response: FEATURE[] = await serverAxios({
    url: `feature/${system_id}`,
    method: METHOD.GET,
    next: { tags: ["features"] },
  });
  return response;
}
