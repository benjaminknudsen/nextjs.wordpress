import PostList from "@/components/PostList";
import { getLatestPosts } from "@/lib/wordpress";
import styles from "./page.module.css";

export default async function Home() {
  const posts = await getLatestPosts();

  return (
    <main>
      <h1>Min Next.js hjemmeside</h1>
      <section className={styles.latest} aria-labelledby="latest-posts">
        <h2 id="latest-posts">Seneste indlæg</h2>
        <PostList posts={posts} />
      </section>
    </main>
  );
}
