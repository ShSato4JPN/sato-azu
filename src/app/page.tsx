import type { GetContentsData } from "@/api/contents/[type]/[slug]/route";
import SwrConfig from "@/components/SwrConfig";
import Top from "@/components/Top";
import { endpointTop } from "@/libs/endpoinsts";
import fetcher from "@/libs/fetcher";

async function getContents(): Promise<GetContentsData> {
  const res = await fetch(`${endpointTop}`, {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const contents = await getContents();

  return (
    <SwrConfig value={{ fallbackData: contents, fetcher }}>
      <Top />
    </SwrConfig>
  );
}
