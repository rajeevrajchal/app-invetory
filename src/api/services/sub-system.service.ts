import useAxios from "@/plugins/call.axios";
import { METHOD } from "@/types/axios-get";

const api = "sub-system";

const system_all_api: Record<string, string> = {
  active: api,
  archived: `${api}?type=archived`,
  on_hold: `${api}?type=on_hold`,
};

const SubSystemService = {
  all: (system_id: string, tab: string) =>
    useAxios({
      url: tab
        ? `${system_id}/${system_all_api[tab]}`
        : `${system_id}/${system_all_api.active}`,
      method: METHOD.GET,
    }),

  create: (system_id: string, payload: any) =>
    useAxios({
      url: `${system_id}/${api}`,
      method: METHOD.POST,
      data: payload,
    }),
};

export default SubSystemService;
