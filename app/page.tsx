import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function page() {
  return (
    <>
      <Header />
      <main className="min-h-dvh container mx-auto py-6">
        <h1 className="">Welcome, Home page!</h1>
      </main>
      <Footer />
    </>
  );
}
