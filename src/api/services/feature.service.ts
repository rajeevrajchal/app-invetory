import useAxios from "@/plugins/call.axios";
import { METHOD } from "@/types/axios-get";

const api = "feature";

const FeatureService = {
  create: (payload: any) =>
    useAxios({
      url: `${api}`,
      method: METHOD.POST,
      data: payload,
    }),
};

export default FeatureService;
