import Head from "next/head";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer";

export default function about() {
  return (
    <>
      <Head>
        <title>About - Urban Greens Antigua</title>
        <meta name="title" content="Urban Greens Antigua" />
        <meta
          name="description"
          content="Discover the unbeatable flavor and nutritional benefits of incorporating sustainable microgreens into your lifestyle in Antigua & Barbuda"
        />
      </Head>
      <Appbar />
      <main className="bg-white">
        <div className="container mx-auto sm:px-6 lg:px-8 py-4">
          <section className="">
            <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">Headline 01</h1>
          </section>
          {/* End Of Section 01  */}
          <section className="">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Headline 02</h2>
          </section>
          {/* End Of Section 01  */}
          <section className="">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Headline 03</h3>
          </section>
          {/* End Of Section 01  */}
          <section className="">
            <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">Headline 04</h4>
          </section>
          {/* End Of Section 01  */}
          <section className="">
            <h5 className="scroll-m-20 text-2xl font-semibold tracking-tight">Headline 05</h5>
          </section>
          {/* End Of Section 01  */}
          <section className="">
            <h6 className="scroll-m-20 text-2xl font-semibold tracking-tight">Headline 01</h6>
          </section>
          {/* End Of Section 01  */}
        </div>
      </main>
      <Footer />
    </>
  );
}
