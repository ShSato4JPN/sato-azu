import type { GetContentsData } from "@/api/contents/[type]/[slug]/route";
import LifeStypeTop from "@/components/LifeStypeTop";
import SwrConfig from "@/components/SwrConfig";
import { endpointLifeStyle } from "@/libs/endpoinsts";
import fetcher from "@/libs/fetcher";

async function getContents(): Promise<GetContentsData> {
  const res = await fetch(`${endpointLifeStyle}`, {
    cache: "no-store",
  });

  return res.json();
}

async function Page() {
  const contents = await getContents();

  return (
    <SwrConfig value={{ fallbackData: contents, fetcher }}>
      <LifeStypeTop />
    </SwrConfig>
  );
}

export default Page;
