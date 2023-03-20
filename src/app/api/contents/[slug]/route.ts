import type { Entry } from "contentful";
import client from "@/libs/client";

export type GetContentData = Entry<Contentful.ISatoAzuFields>;

type ApiProps = {
  params: {
    slug: string;
  };
};

export async function GET(
  _: Request,
  { params: { slug } }: ApiProps
): Promise<Response> {
  const content = await client.getEntries<GetContentData>({
    content_type: "satoAzu",
    "fields.id": slug,
  });

  return new Response(JSON.stringify(content));
}
