"use client";

import { QueryCache, QueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      retryOnMount: false,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: "always",
    },
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query?.meta?.errorMessage) {
        toast.error((query?.meta?.errorMessage as string) || "");
      } else {
        toast.error(error?.message || "Something went wrong");
      }
    },
  }),
});

export default queryClient;
