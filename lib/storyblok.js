async function callStoryBlok(query) {
  const fetchUrl = `https://gapi.storyblok.com/v1/api`;

  const fetchOptions = {
    endpoint: fetchUrl,
    method: "POST",
    headers: {
      "Token": process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
      "version": "draft",
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(fetchUrl, fetchOptions).then((response) => 
      response.json()
    );
    return data;
  } catch (error) {
    throw new Error("Could not fetch storyblok data!");
  }
}


export async function getPageData(id) {

  const query = `
    query {
      PageItem(id: "${id}") {
        id
        content {
          body
        }
      }
    }
  `;

  const response = await callStoryBlok(query);

  const data = response.data.PageItem
    ? response.data.PageItem
    : [];

  return data;
};