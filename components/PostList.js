import PostCard from "./PostCard";
import styles from "./PostList.module.css";

export default function PostList({ posts }) {
  if (posts.length === 0) {
    return <p>Der er endnu ingen indlæg.</p>;
  }

  return (
    <div className={styles.grid}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
