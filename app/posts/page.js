import PostList from "@/components/PostList";
import { getPosts } from "@/lib/wordpress";

export default async function Posts() {
  const posts = await getPosts();

  return (
    <main>
      <h1>Indlæg</h1>
      <PostList posts={posts} />
    </main>
  );
}
