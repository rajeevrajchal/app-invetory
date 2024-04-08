"use server";

import { $FIX_ME } from "@/types/fix-me";

import serverAxios from "@/plugins/server-axios";
import { METHOD } from "@/types/axios-get";

export async function getSystemData(system_id: string) {
  const response: $FIX_ME = await serverAxios({
    url: `system/${system_id}`,
    method: METHOD.GET,
  });
  return response;
}
