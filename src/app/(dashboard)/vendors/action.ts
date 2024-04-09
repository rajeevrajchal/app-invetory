"use server";

import serverAxios from "@/plugins/server-axios";
import { METHOD } from "@/types/axios-get";
import { $FIX_ME } from "@/types/fix-me";

export async function getVendors() {
  const response: $FIX_ME = await serverAxios({
    url: `vendors`,
    method: METHOD.GET,
    next: { tags: ["vendors"] },
  });
  return response;
}

export async function getVendor(vendor_id: string) {
  const response: $FIX_ME = await serverAxios({
    url: `vendors/${vendor_id}`,
    method: METHOD.GET,
    next: { tags: ["vendors_detail"] },
  });
  return response;
}
