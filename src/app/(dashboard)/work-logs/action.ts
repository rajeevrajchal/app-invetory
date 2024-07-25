"use server";

import serverAxios from "@/plugins/server-axios";
import { METHOD } from "@/types/axios-get";
import { $FIX_ME } from "@/types/fix-me";

export async function getWorkLogs() {
  const response: $FIX_ME = await serverAxios({
    url: `work_logs`,
    method: METHOD.GET,
    next: { tags: ["work_logs"] },
  });
  return response;
}

export async function getWorkLogsByUser(user_id: string) {
  const response: $FIX_ME = await serverAxios({
    url: `work_logs/${user_id}`,
    method: METHOD.GET,
    next: { tags: ["work_logs_users"] },
  });
  return response;
}
