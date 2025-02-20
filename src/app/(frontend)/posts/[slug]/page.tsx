import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/quires";
import { notFound } from "next/navigation";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "next-sanity";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="container grid grid-cols-1 gap-6 p-12">
      {post?.mainImage ? (
        <div className="relative max-w-[100ch] aspect-video">
          <Image
            fill
            className=""
            src={urlFor(post.mainImage).quality(80).auto("format").url()}
            alt={post?.mainImage?.alt || ""}
          />
        </div>
      ) : (
        <Link href="/">&larr; Return to index</Link>
      )}
      <h1 className="text-4xl font-bold text-balance">{post?.title}</h1>
      {post?.body ? (
        <div className="prose">
          <PortableText value={post.body} />
        </div>
      ) : null}
      <hr />
      <Link href="/">&larr; Return to index</Link>
    </main>
  );
}
