import Image from "next/image"
import Appbar from "../components/Appbar"
import Footer from "../components/Footer"
import Head from "next/head"
import { incentives, FAQs } from "@/lib/data"
import Link from "next/link"
import Logo from "@/components/Logo";

export default function index() {
  return (
    <>
      <Head>
        <title>Urban Greens Antigua</title>
        <meta name="title" content="Urban Greens Antigua" />
        <meta name="description" content="Discover the unbeatable flavor and nutritional benefits of incorporating sustainable microgreens into your lifestyle in Antigua & Barbuda" />
      </Head>
      <Appbar />
      <main className="bg-white dark:bg-black shadow-sm border-b">
        <HeroSection />
        <Incentives />
        <CallToAction_Products />
        <Product_Benifites />
        <Testimonials />
        <CallToAction_SocialMedia />
      </main>
      <Footer />
    </>
  )
}

function HeroSection() {
  return (
    <>
      <section className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="py-24 space-y-6">
          <div className="justify-start hidden sm:flex sm:justify-center">
            <div className="relative px-3 py-1 text-sm leading-6 rounded-full text-primary dark:text-primary-50 ring-1 ring-black/20">
              Anim aute id magna aliqua ad ad non deserunt sunt.
              <a href="#" className="font-semibold ml-2">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <h1 className="text-5xl dark:text-white font-bold text-center">Sustainable Microgreens, Unbeatable Flavor!</h1>
          <p className="text-balance text-lg leading-6 tracking-wide max-w-[75ch] mx-auto text-center">Our microgreens are packed with nutrients and flavor, making them the perfect addition to any meal. From salads to smoothies, sandwiches to sushi, the possibilities are endless. Plus, with our convenient delivery service, you can easily incorporate microgreens into your diet without leaving your home.</p>
          <div className="flex flex-col justify-start gap-4 md:flex-row md:justify-center">
            <Link
              href="/microgreens"
              className="px-3 py-2 text-sm font-semibold rounded-md text-white bg-primary hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Preview Our Greens
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 text-sm font-semibold bg-transparent rounded-md text-primary ring-1 ring-inset ring-primary hover:bg-primary/5"
            >
              About Urban Greens
            </Link>
          </div>
        </div>
        <div className="overflow-hidden bg-transparent ">
          <div className="px-4 py-5 sm:p-6 w-full h-[420px] md:h-[640px] relative z-10">
            <Image fill quality={40} src="/media/urban-greens-antigua-hero.jpg" alt="Hodges Bay Club garnished with our Island Microgreens" className="object-cover object-center rounded-xl" />
          </div>
        </div>
      </section>
    </>
  )
}

function Incentives() {
  return (
    <>
      <section className="max-w-7xl mx-auto sm:px-6 lg:px-8" aria-label="Incentives to buy microgreens">
        <div className="grid max-w-2xl grid-cols-1 px-4 mx-auto gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
          {incentives.map((incentive) => (
            <div key={incentive.name} className="text-left sm:flex lg:block md:text-center">
              <div className="sm:flex-shrink-0">
                <div className="flow-root">
                  <div className="relative h-24 mx-auto w-28">
                    <Image fill quality={40} src={incentive.imageSrc} alt="" className="object-cover object-center" />
                  </div>
                </div>
              </div>
              <div className="mt-3 sm:ml-3 sm:mt-0 lg:ml-0 lg:mt-3">
                <h3 className="title-large ">{incentive.name}</h3>
                <p className="mt-2 body-large">{incentive.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
function Product_Benifites() {
  return (
    <>
      <section className="px-4 py-24 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div>
            <h3 className="mb-4 font-bold capitalize headline-large">Clear overview for efficient tracking</h3>
            <p className="mb-5 body-large">
              Handle your subscriptions and transactions efficiently with the clear overview in Dashboard. Features like the smart search option allow you to quickly find any data you’re looking for.
            </p>
            <button
              type="button"
              className="px-3 py-2 text-sm font-semibold bg-transparent rounded-md text-primary ring-1 ring-inset ring-primary hover:bg-primary/5"
            >
              Button text
            </button>
          </div>
          <div className="w-full h-[420px] relative bg-primary-200 dark:bg-primary-900 rounded-xl">
            <Image fill quality={40} src="/media/urban-greens-auntigua.jpg" alt="" aria-label="micro-greens-inside-steak sandwitch" className="object-cover object-center rounded-xl" />
          </div>
        </div>
        <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div className="order-none md:order-2">
            <h3 className="mb-4 font-bold capitalize headline-large">Decide how you integrate Payments</h3>
            <p className="mb-5 body-large">
              Love to code? Next to our ready-made and free plugins you can use our expansive yet simple API; decide how you integrate Payments and build advanced and reliable products yourself from
              scratch.
            </p>
            <button
              type="button"
              className="px-3 py-2 text-sm font-semibold bg-transparent rounded-md text-primary ring-1 ring-inset ring-primary hover:bg-primary/5"
            >
              Button text
            </button>
          </div>
          <div className="w-full h-[420px] relative bg-primary-200 dark:bg-primary-900 rounded-xl">
            <Image fill quality={40} src="/media/micro-greens-with-steak.jpg" alt="" aria-label="micro-greens-inside-steak sandwitch" className="object-cover object-center rounded-xl" />
          </div>
        </div>
      </section>
    </>
  )
}
function Testimonials() {
  return (
    <>
      <section className="max-w-7xl mx-auto relative px-6 py-24 overflow-hidden text-left isolate sm:rounded-3xl sm:px-16 rounded-xl  bg-secondary" aria-label="Section 05">
        <div className="relative max-w-2xl mx-auto lg:mx-0">
          <div className="relative w-auto h-12">
          <Logo classNames="w-20 h-20 fill-gray-900 hover:opacity-80 transition-all" />
          </div>
          <figure>
            <blockquote className="mt-6 font-bold title-large">
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                molestiae. Numquam corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote>
            <figcaption className="mt-6 body-large">
              <div className="font-semibold">Judith Black</div>
              <div className="mt-1">CEO of Workcation</div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  )
}
function CallToAction_Products() {
  return (
    <>
      <section className="max-w-7xl mx-auto lg:px-8 relative px-6 py-24 overflow-hidden text-center isolate sm:rounded-3xl sm:px-16 bg-secondary" aria-label="Section 05">
        <h5 className="font-bold headline-small">Make Microgreens Part Of Your Diet Today!</h5>
        <p className="mt-4 text-lg body-large lg:max-w-prose lg:mx-auto ">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
          commodo do ea.</p>
        <div className="flex items-center justify-center mt-10 gap-x-6">
          <a
            href="#"
            className="px-3 py-2 text-sm font-semibold rounded-md text-white bg-black hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            Order Today
          </a>
          <a href="#" className="px-3 py-2 text-sm font-semibold bg-transparent rounded-md text-primary-600 ring-1 ring-inset ring-black hover:bg-black/5">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </>
  )
}

function CallToAction_SocialMedia() {
  return (
    <>
      <section className="max-w-7xl mx-auto sm:px-6 lg:px-8" aria-label="Section 06">
        <div className="px-6 py-16 mx-auto max-w-7xl sm:py-24 lg:px-8">
          <h2 className="mt-2 text-3xl font-bold tracking-tight capitalize text-primary-900 sm:text-4xl">Frequently asked questions</h2>
          <p className="max-w-3xl mt-6 text-lg leading-8 text-primary-800">
            Have a different question and can’t find the answer you’re looking for? Reach out to our support team by
            <Link href="mailto:info@urbangreensanu.com" className="font-semibold text-primary-600 hover:text-primary-500">
              sending us an email
            </Link>
            and we’ll get back to you as soon as we can.
          </p>
          <div className="mt-20">
            <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
              {FAQs.map((faq) => (
                <div key={faq.id}>
                  <dt className="text-lg font-bold leading-4 text-gray-900 capitalize">{faq.question}</dt>
                  <dd className="mt-2 body-large">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  )
}
