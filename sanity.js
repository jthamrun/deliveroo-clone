import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.PROJECT_ID;

//`${projectId}`

const client = sanityClient({
    projectId: "k2tgqajf",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
