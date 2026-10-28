import Image from "next/image";
import { notFound } from "next/navigation";
import { getPageBySlug } from "@/lib/wordpress";

export default async function About() {
  const page = await getPageBySlug("about");

  if (!page) {
    notFound();
  }

  const image = page._embedded?.["wp:featuredmedia"]?.[0];

  return (
    <main>
      <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
      {image?.source_url && (
        <Image
          className="featured-image"
          src={image.source_url}
          alt={image.alt_text?.trim() || page.title.rendered.replace(/<[^>]*>/g, "")}
          width={image.media_details?.width || 1200}
          height={image.media_details?.height || 675}
          sizes="100vw"
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </main>
  );
}
