import useAxios, { METHOD } from "@/plugins/call.axios";

const api = "system";
const SystemService = {
  create: (payload: any) =>
    useAxios({
      url: api,
      method: METHOD.POST,
      data: payload,
    }),
};

export default SystemService;
