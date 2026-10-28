import Image from "next/image";
import Link from "next/link";
import { getCategories } from "@/lib/categories";
import styles from "./PostCard.module.css";

export default function PostCard({ post }) {
  const categories = getCategories(post);
  const image = post._embedded?.["wp:featuredmedia"]?.[0];

  return (
    <article className={styles.card}>
      {image?.source_url && (
        <div className={styles.imageWrapper}>
          <Image
            src={image.source_url}
            alt={image.alt_text?.trim() || post.title.rendered.replace(/<[^>]*>/g, "")}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.image}
          />
        </div>
      )}
      {categories.length > 0 && (
        <ul className={styles.categories} aria-label="Kategorier">
          {categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      )}
      {/* HTML fra vores eget WordPress-sites renderede titler og uddrag. */}
      <h2
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <div
        className={styles.excerpt}
        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
      />
      <Link href={`/posts/${post.slug}`} className={styles.link}>
        Læs indlæg
      </Link>
    </article>
  );
}
