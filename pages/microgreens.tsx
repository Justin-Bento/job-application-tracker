import Head from "next/head";
// End of Next.js Scripts
import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

export default function microgreens() {
  return (
    <>
      <Head>
        <title>Microgreens - Urban Greens Antigua</title>
        <meta name="title" content="Urban Greens Antigua" />
        <meta
          name="description"
          content="Discover the unbeatable flavor and nutritional benefits of incorporating sustainable microgreens into your lifestyle in Antigua & Barbuda"
        />
      </Head>
      <Appbar />
      <main className="bg-white dark:bg-black">
        <div className="container mx-auto sm:px-6 lg:px-8 space-y-10 lg:py-20">
          <section className="max-w-4xl">
            <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              The People of the Kingdom
            </h1>
            <p className="leading-7">
              The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke
              tax.
            </p>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microgreens_plants.map((plants) => {
              return (
                <>
                  <Card
                    Headline={plants.title}
                    link={`/microgreens/${plants.slug}`}
                    description={plants.description}
                  />
                </>
              );
            })}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

const microgreens_plants = [
  {
    // Product Number #1 
    title: "Red Garnet Amaranth",
    description:
      "Thiamine, niacin, calcium, potassium, iron, manganese, zinc, and copper, and its leaves are a good source of vitamins A and C and folate. Good source of dietary fibre",
  },
  {
    // Product Number #2
    title: "Micro Arugula",
    description:
      "Thiamine, niacin, calcium, potassium, iron, manganese, zinc, and copper, and its leaves are a good source of vitamins A and C and folate. Good source of dietary fibre",
  },
  {
    // Product Number #3 
    title: "Red Garnet Amaranth",
    description:
      "Thiamine, niacin, calcium, potassium, iron, manganese, zinc, and copper, and its leaves are a good source of vitamins A and C and folate. Good source of dietary fibre",
  },
  {
    // Product Number #4 
    title: "Red Garnet Amaranth",
    description:
      "Thiamine, niacin, calcium, potassium, iron, manganese, zinc, and copper, and its leaves are a good source of vitamins A and C and folate. Good source of dietary fibre",
  },
  {
    // Product Number #5 
    title: "Red Garnet Amaranth",
    description:
      "Thiamine, niacin, calcium, potassium, iron, manganese, zinc, and copper, and its leaves are a good source of vitamins A and C and folate. Good source of dietary fibre",
  },
  {
    // Product Number #6 
    title: "Red Garnet Amaranth",
    description:
      "Thiamine, niacin, calcium, potassium, iron, manganese, zinc, and copper, and its leaves are a good source of vitamins A and C and folate. Good source of dietary fibre",
  },
  {
    // Product Number #7
    title: "Red Garnet Amaranth",
    description:
      "Thiamine, niacin, calcium, potassium, iron, manganese, zinc, and copper, and its leaves are a good source of vitamins A and C and folate. Good source of dietary fibre",
  },
  {
    // Product Number #8
    title: "Red Garnet Amaranth",
    description:
      "Thiamine, niacin, calcium, potassium, iron, manganese, zinc, and copper, and its leaves are a good source of vitamins A and C and folate. Good source of dietary fibre",
  },
  {
    // Product Number #9
    title: "Red Garnet Amaranth",
    description:
      "Thiamine, niacin, calcium, potassium, iron, manganese, zinc, and copper, and its leaves are a good source of vitamins A and C and folate. Good source of dietary fibre",
  },
];
