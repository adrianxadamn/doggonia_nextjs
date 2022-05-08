import sanityClient from '@sanity/client';

// See the image above on how to get your projectId and add a new API token
// I added one called "landing page"
const client = sanityClient({
  projectId: 'y7qrmcyv',
  dataset: 'test',
  token: 'skub82cTjbJxdXJsYpQAL3WZzI4PZtZ1mYFolqRhcOWP2dEbtSgrwZTqGuLbymtmNpEbxtJkwhbA3jLMzDFMRysond6jpCCP2Sry7gqWvTwQpymiwyPZxPbo4Tf6vBlSkZVG39QWhTTHotYqlJRnHomMr7thVEq1rcGp2MKMJJRB3rKWn5fs', // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
});

export default client;
