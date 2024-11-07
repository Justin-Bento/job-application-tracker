import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Header />
      <main className="min-h-dvh space-y-6 py-24">
        <section className="container mx-auto px-6">
          <h1 className="text-4xl font-bold tracking-[-0.05rem] capitalize">Welcome, Home page!</h1>
          <p className="text-base/6 max-w-[100ch] my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime soluta exercitationem, ipsum enim ab
            quibusdam perspiciatis facilis reiciendis veniam nisi, ipsa iusto, deserunt explicabo natus aliquam dolores?
            Non, quod natus.
          </p>
          <Divider className="w-24 h-1" />
        </section>
        <section className="container mx-auto px-6">
          {Array.from({ length: 10 }, (_, index) => {
            return (
              <Link href={`/${index + 1}`} key={index} className="">
                <div className="group overflow-hidden rounded-lg border border-gray-200 mt-6 hover:bg-gray-100/50 transition-colors hover:border-black/25">
                  <div className="px-4 py-5 sm:p-6 space-y-2">
                    <h2 className="font-semibold capitalize">Card {index + 1}.</h2>
                    <p className="">
                      This card links to other routes within the application and that is my quick summary of this card.
                    </p>
                    <p className="text-xs group-hover:underline">Read More &rarr;</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}
