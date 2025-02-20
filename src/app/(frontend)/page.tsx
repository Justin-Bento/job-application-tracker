import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/quires";

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });
  const recipie_book = posts.map((post) => {
    return (
      <li key={post._id}>
        <Link
          className="block p-4 hover:text-blue-500"
          href={`/posts/${post?.slug?.current}`}
        >
          {post?.title}
        </Link>
      </li>
    );
  });
  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12 space-y-16">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Digital Recipie Book</h1>
        <ul className="grid grid-cols-1 divide-y divide-gray-300">
          {recipie_book}
        </ul>
        <hr />
      </section>
      <section className="">
        <h2 className="text-4xl font-bold">Hobbies</h2>
      </section>
    </main>
  );
}
