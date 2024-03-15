import useAxios, { METHOD } from "@/plugins/call.axios";

const api = "system";

const system_all_api: Record<string, string> = {
  active: api,
  archived: `${api}?type=archived`,
  on_hold: `${api}?type=on_hold`,
};

const SystemService = {
  all: (tab: string) =>
    useAxios({
      url: tab ? system_all_api[tab] : system_all_api.active,
      method: METHOD.GET,
    }),
  detail: (id: string) => {
    if (!id) {
      throw new Error("No system id found");
    }
    return useAxios({
      url: `${api}/${id}`,
      method: METHOD.GET,
    });
  },
  create: (payload: any) =>
    useAxios({
      url: api,
      method: METHOD.POST,
      data: payload,
    }),
  update: (payload: any, id: string) =>
    useAxios({
      url: `${api}/${id}`,
      method: METHOD.PATCH,
      data: payload,
    }),
  re_store: (id: string) => {
    if (!id) {
      throw new Error("No system id found");
    }
    return useAxios({
      url: `${api}/${id}/re-store`,
      method: METHOD.PATCH,
    });
  },
  delete: (id: string) => {
    if (!id) {
      throw new Error("No system id found");
    }
    return useAxios({
      url: `${api}/${id}`,
      method: METHOD.DELETE,
    });
  },
};

export default SystemService;
