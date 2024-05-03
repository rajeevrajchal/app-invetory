"use server";

import serverAxios from "@/plugins/server-axios";
import { METHOD } from "@/types/axios-get";
import { $FIX_ME } from "@/types/fix-me";

export async function getCustomers() {
  const response: $FIX_ME = await serverAxios({
    url: `customers`,
    method: METHOD.GET,
    next: { tags: ["customers"] },
  });
  return response;
}

export async function getCustomer(customer_id: string) {
  const response: $FIX_ME = await serverAxios({
    url: `customers/${customer_id}`,
    method: METHOD.GET,
    next: { tags: ["customers_detail"] },
  });
  return response;
}
