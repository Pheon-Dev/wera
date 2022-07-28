import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import {SANITY_TOKEN, SANITY_PROJECT_ID} from '@env';

export const client = sanityClient({
  projectId: SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-05',
  useCdn: true,
  token: SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

