// NOTE this for global or some endpoint that just 1 or 2

import { K } from "@/lib/constants";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ENDP } from "../endpoint";

export function useAllBanner() {
  const { data } = useQuery({
    queryKey: [K.BANNER],
    queryFn: () => ENDP.global.banner(),
  });

  return {
    respAllBanner: data,
  };
}
export function useGetBanner(id?: string) {
  const { data } = useQuery({
    queryKey: [K.BANNER, id],
    queryFn: () => ENDP.global.banner(),
    enabled: !!id,
  });

  return {
    respGetBanner: data,
  };
}
export function usePostReview() {
  const { mutate } = useMutation({
    // NOTE dont put any, use a real body types later on
    mutationFn: (b: any) => ENDP.global.review_post(b),
    meta: {
      // NOTE: meta are optional but i suggest u should using it
      invalidatesQuery: [K.BANNER], // NOTE: put query key api that u need to inavalidates query (refetching after success)
      errorMsg: "Failed bla bla",
      successMsg: "Success bla bla",
    },
  });
  return {
    postReview: mutate,
  };
}
