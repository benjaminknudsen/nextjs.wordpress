async function fetchWordPress(path) {
  const response = await fetch(`${process.env.WORDPRESS_URL}${path}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Kunne ikke hente indhold fra WordPress (${response.status}).`);
  }

  return response.json();
}

export async function getPosts() {
  const posts = await fetchWordPress("/wp-json/wp/v2/posts?_embed");

  if (process.env.NODE_ENV === "development") {
    console.log("WordPress-indlæg:", posts);
  }

  return posts;
}

export async function getPostBySlug(slug) {
  const posts = await fetchWordPress(
    `/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`,
  );
  return posts[0] ?? null;
}

export async function getLatestPosts() {
  return fetchWordPress(
    "/wp-json/wp/v2/posts?_embed&per_page=3&orderby=date&order=desc",
  );
}

export async function getPageBySlug(slug) {
  const pages = await fetchWordPress(
    `/wp-json/wp/v2/pages?slug=${encodeURIComponent(slug)}&_embed`,
  );
  return pages[0] ?? null;
}
