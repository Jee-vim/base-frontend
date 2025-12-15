import { K } from "@/lib/constants";
import Index from "./module";

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { ENDP } from "@/services/endpoint";

export default async function Page() {
  const queryClient = new QueryClient();
  // NOTE if the endpoint didint need any params
  // u should fetch ssr way like this
  await Promise.allSettled([
    queryClient.prefetchQuery({
      queryKey: [K.BANNER],
      queryFn: () => ENDP.global.banner(),
    }),
    // NOTE if need other api just put below
    // queryClient.prefetchQuery({
    //   queryKey: [K.BANNER],
    //   queryFn: () => ENDP.global.banner(),
    // }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Index />
    </HydrationBoundary>
  );
}
