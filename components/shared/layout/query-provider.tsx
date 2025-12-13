"use client";

import {
  isServer,
  MutationCache,
  QueryClient,
  QueryClientProvider,
  QueryKey,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { useAppContext } from "./context-provider";

declare module "@tanstack/react-query" {
  interface Register {
    mutationMeta: {
      invalidatesQuery?: QueryKey;
      successMsg?: string;
      errorMsg?: string;
    };
  }
}

function makeQueryClient() {
  return new QueryClient({
    mutationCache: new MutationCache({
      onSuccess: (_error, _variables, _context, mutation) => {
        const msg = mutation.meta?.successMsg;
        if (msg) {
          toast.success(msg);
        }
      },
      onError: (_error, _variables, _context, mutation) => {
        const msg = mutation.meta?.errorMsg;
        if (msg) {
          toast.error(msg);
        }
      },
      onSettled: (_data, _error, _variables, _context, mutation) => {
        if (mutation.meta?.invalidatesQuery) {
          const queryClient = getQueryClient();
          queryClient.invalidateQueries({
            queryKey: mutation.meta.invalidatesQuery,
          });
        }
      },
    }),
    defaultOptions: {
      queries: {
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setLoading, clearLoading } = useAppContext();

  // NOTE: Avoid useState when initializing the query client if you don't
  //       have a suspense boundary between this and the code that may
  //       suspend because React will throw away the client on the initial
  //       render if it suspends and there is no boundary
  const queryClient = getQueryClient();
  queryClient.setDefaultOptions({
    mutations: {
      onMutate: () => setLoading(),
      onSettled: () => clearLoading(),
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
