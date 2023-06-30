import sanityClient, { SanityDocument } from "@sanity/client";
import { DATA_SET, NEXT_PUBLIC_PROJECT_ID, SANITY_WRITE_TOKEN } from "../../app/api/utils/constants";
import { Services } from "../../app/api/generated";
import { SanityClientServiceResponse } from "../../app/api/generated/services/sanityClientServices";

export type HiringRequestResponseData = SanityClientServiceResponse<
    SanityDocument<Record<string, any>>
>

export const client = sanityClient({
    dataset: DATA_SET,
    projectId: NEXT_PUBLIC_PROJECT_ID,
    token: SANITY_WRITE_TOKEN,
    useCdn: false,
  });

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only post request allowed" });
  }
  try {
   const data = await Services.SanityClientService.createContactRequest({
    doc: req?.body,
    client: client,
  });
   return res.status(200).send(data)
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Internal server error";
    res.status(500).json({ message: errorMessage });
  }
}
