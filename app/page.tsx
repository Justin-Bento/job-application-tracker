import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

export default function page() {
  return (
    <>
      <Header />
      <main className="min-h-dvh">
        <section className="container mx-auto p-6">
          <h1 className="text-4xl font-bold tracking-[-0.05rem] capitalize">Welcome, Home page!</h1>
          <Divider className="w-24 h-1" />
        </section>
      </main>
      <Footer />
    </>
  );
}
