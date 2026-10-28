import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/wordpress";
import { formatDate } from "@/lib/format";
import { getCategories } from "@/lib/categories";
import styles from "./page.module.css";

export default async function Post({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const categories = getCategories(post);
  const image = post._embedded?.["wp:featuredmedia"]?.[0];
  const formattedDate = formatDate(post.date);

  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <time className={styles.date} dateTime={post.date}>
          {formattedDate}
        </time>
        {categories.length > 0 && (
          <ul className={styles.categories} aria-label="Kategorier">
            {categories.map((category) => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        )}
        {image?.source_url && (
          <div className={styles.imageWrapper}>
            <Image
              src={image.source_url}
              alt={image.alt_text?.trim() || post.title.rendered.replace(/<[^>]*>/g, "")}
              fill
              sizes="(max-width: 832px) 100vw, 768px"
              className={styles.image}
            />
          </div>
        )}
        {/* Renderet HTML fra vores eget WordPress-site. */}
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </article>
      <Link className={styles.backLink} href="/posts">
        Tilbage til indlæg
      </Link>
    </main>
  );
}
