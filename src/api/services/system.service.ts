import useAxios, { METHOD } from "@/plugins/call.axios";

const api = "system";
const SystemService = {
  all: () =>
    useAxios({
      url: api,
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
};

export default SystemService;
