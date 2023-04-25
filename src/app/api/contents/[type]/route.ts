import type { EntryCollection } from "contentful";
import client from "@/libs/client";
import type { SiteContents } from "@/types/data";

export type GetContentsData = EntryCollection<Contentful.ISatoAzuFields>;

type ApiProps = {
  params: {
    type: SiteContents;
  };
};

export async function GET(
  _: Request,
  { params: { type } }: ApiProps
): Promise<Response> {
  const contents = await client.getEntries<Contentful.ISatoAzuFields>({
    content_type: "satoAzu",
    "fields.id": type,
  });

  return new Response(JSON.stringify(contents as GetContentsData));
}
