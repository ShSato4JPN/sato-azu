import type { GetContentsData } from "@/api/contents/[type]/[slug]/route";
import StoryTop from "@/components/StoryTop";
import SwrConfig from "@/components/SwrConfig";
import { endpointStory } from "@/libs/endpoinsts";
import fetcher from "@/libs/fetcher";

async function getContents(): Promise<GetContentsData> {
  const res = await fetch(`${endpointStory}`, {
    cache: "no-store",
  });

  return res.json();
}

async function Page() {
  const contents = await getContents();

  return (
    <SwrConfig value={{ fallbackData: contents, fetcher }}>
      <StoryTop />
    </SwrConfig>
  );
}

export default Page;
