import type { EntryCollection } from "contentful";
import client from "@/libs/client";
import type { SatoOrAzu, SiteContents } from "@/types/data";

export type GetContentsData = EntryCollection<Contentful.ISatoAzuFields>;

type ApiProps = {
  params: {
    type: SiteContents;
    slug: SatoOrAzu;
  };
};

export async function GET(
  _: Request,
  { params: { type, slug } }: ApiProps
): Promise<Response> {
  const contents = await client.getEntries<Contentful.ISatoAzuFields>({
    content_type: "satoAzu",
    "fields.id": `${type}-${slug}`,
  });

  return new Response(JSON.stringify(contents as GetContentsData));
}
