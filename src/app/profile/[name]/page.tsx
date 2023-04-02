import type { GetContentsData } from "@/api/contents/[type]/[slug]/route";
import ProfileTop from "@/components/ProfileTop";
import SwrConfig from "@/components/SwrConfig";
import { endpointProfile } from "@/libs/endpoinsts";
import fetcher from "@/libs/fetcher";
import type { SatoOrAzu } from "@/types/data";

type PageProps = {
  params: {
    name: SatoOrAzu;
  };
};

async function getContents(name: SatoOrAzu): Promise<GetContentsData> {
  const res = await fetch(`${endpointProfile}/${name}`, {
    cache: "no-store",
  });

  return res.json();
}

async function Page({ params: { name } }: PageProps) {
  const contents = await getContents(name);

  return (
    <SwrConfig value={{ fallbackData: contents, fetcher }}>
      <ProfileTop name={name} />
    </SwrConfig>
  );
}

export default Page;
