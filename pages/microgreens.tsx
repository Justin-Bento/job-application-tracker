import Head from "next/head";
// End of Next.js Scripts
import Appbar from '@/components/Appbar'
import Footer from '@/components/Footer'
import Card from "@/components/Card"

export default function microgreens() {
  return (
    <>
      <Head>
        <title>Microgreens - Urban Greens Antigua</title>
        <meta name="title" content="Urban Greens Antigua" />
        <meta name="description" content="Discover the unbeatable flavor and nutritional benefits of incorporating sustainable microgreens into your lifestyle in Antigua & Barbuda" />
      </Head>
      <Appbar />
      <main className="wrapper-sapce wrapper">
        <section className="max-w-4xl">
          <h1 className="font-bold headline-large">Headline 01</h1>
          <p className="body-large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente unde reiciendis expedita obcaecati modi consequatur maiores minima aspernatur labore sint veniam ea hic, voluptas blanditiis voluptatem molestiae velit veritatis. Nesciunt.</p>
        </section>
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card Headline="Red Garnet Amaranth" title="Red Garnet Amaranth" link="/microgreens/slug" description="Thiamine, niacin, calcium, potassium, iron, manganese, zinc, and copper, and its leaves are a good source of vitamins A and C and folate. Good source of dietary fibre" />
          <Card Headline="Red Garnet Amaranth" title="Red Garnet Amaranth" link="/microgreens/slug" description="Thiamine, niacin, calcium, potassium, iron, manganese, zinc, and copper, and its leaves are a good source of vitamins A and C and folate. Good source of dietary fibre" />
          <Card Headline="Red Garnet Amaranth" title="Red Garnet Amaranth" link="/microgreens/slug" description="Thiamine, niacin, calcium, potassium, iron, manganese, zinc, and copper, and its leaves are a good source of vitamins A and C and folate. Good source of dietary fibre" />
          <Card Headline="Red Garnet Amaranth" title="Red Garnet Amaranth" link="/microgreens/slug" description="Thiamine, niacin, calcium, potassium, iron, manganese, zinc, and copper, and its leaves are a good source of vitamins A and C and folate. Good source of dietary fibre" />
          <Card Headline="Red Garnet Amaranth" title="Red Garnet Amaranth" link="/microgreens/slug" description="Thiamine, niacin, calcium, potassium, iron, manganese, zinc, and copper, and its leaves are a good source of vitamins A and C and folate. Good source of dietary fibre" />
          <Card Headline="Red Garnet Amaranth" title="Red Garnet Amaranth" link="/microgreens/slug" description="Thiamine, niacin, calcium, potassium, iron, manganese, zinc, and copper, and its leaves are a good source of vitamins A and C and folate. Good source of dietary fibre" />
        </section>
      </main>
      <Footer />
    </>
  )
}