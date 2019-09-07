import { createClient } from 'contentful';

export default createClient({
  space: process.env.VUE_APP_CONTENTFUL_SPACE,
  accessToken: process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN,
});