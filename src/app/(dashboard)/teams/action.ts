"use server";

import serverAxios from "@/plugins/server-axios";
import { METHOD } from "@/types/axios-get";
import { $FIX_ME } from "@/types/fix-me";

export async function getTeams() {
  const response: $FIX_ME = await serverAxios({
    url: `teams`,
    method: METHOD.GET,
    next: { tags: ["teams"] },
  });
  return response;
}

export async function getTeam(team_id: string) {
  const response: $FIX_ME = await serverAxios({
    url: `teams/${team_id}`,
    method: METHOD.GET,
    next: { tags: ["team_detail"] },
  });
  return response;
}
