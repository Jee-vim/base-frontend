import Index from "./module";

import { getAuth } from "@/lib/auth";
export default async function Page() {
  const name = await getAuth();
  return <Index />;
}
