import Image from "next/image"
import Appbar from "../components/Appbar"
import Head from "next/head"
import { incentives } from "@/lib/data"

export default function index() {
  return (
    <>
      <Head>
        <title>Urban Greens Antigua</title>
        <meta name="title" content="Urban Greens Antigua" />
        <meta name="description" content="Discover the unbeatable flavor and nutritional benefits of incorporating sustainable microgreens into your lifestyle in Antigua & Barbuda" />
      </Head>
      <Appbar />
      <main className="wrapper-sapce wrapper ">
        <HeroSection />
        <Incentives />
        <CallToAction_Products />
        <Product_Benifites />
        <Testimonials />
        <CallToAction_SocialMedia />
      </main>
    </>
  )
}

function HeroSection() {
  return (
    <>
      <section className="">
        <div className="my-8 space-y-6">
          <div className="justify-start hidden sm:flex sm:justify-center">
            <div className="relative px-3 py-1 text-sm leading-6 rounded-full text-primary-950 dark:text-primary-50 ring-1 ring-primary-900/10 dark:ring-primary-100/30 hover:ring-primary-900/20 dark:hover:ring-primary-100/30">
              Anim aute id magna aliqua ad ad non deserunt sunt.{' '}
              <a href="#" className="font-semibold text-primary-600 dark:text-primary-300 whitespace-nowrap">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <h1 className="font-bold display-medium md:text-center">Sustainable Microgreens, Unbeatable Flavor!</h1>
          <p className="text-lg body-large text-start sm:text-center lg:max-w-[70ch] lg:mx-auto">Our microgreens are packed with nutrients and flavor, making them the perfect addition to any meal. From salads to smoothies, sandwiches to sushi, the possibilities are endless. Plus, with our convenient delivery service, you can easily incorporate microgreens into your diet without leaving your home.</p>
          <div className="flex flex-col justify-start gap-4 md:flex-row md:justify-center">
            <button
              type="button"
              className="px-3 py-2 text-sm font-semibold rounded-md text-primary-50 bg-primary-600 hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Preview Our Greens
            </button>
            <button
              type="button"
              className="px-3 py-2 text-sm font-semibold bg-transparent rounded-md text-primary-600 ring-1 ring-inset ring-primary-300 hover:bg-primary-50"
            >
              Button text
            </button>
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
      <section className="" aria-label="Incentives to buy microgreens">
        <div className="grid max-w-2xl grid-cols-1 px-4 mx-auto gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
          {incentives.map((incentive) => (
            <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
              <div className="sm:flex-shrink-0">
                <div className="flow-root">
                  <img className="h-24 mx-auto w-28" src={incentive.imageSrc} alt="" />
                </div>
              </div>
              <div className="mt-3 sm:ml-3 sm:mt-0 lg:ml-0 lg:mt-3">
                <h3 className="title-large text-primary-50">{incentive.name}</h3>
                <p className="mt-2 body-large text-primary-100/80">{incentive.description}</p>
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
      <section className="" aria-label="Section 03">
        <h3 className="headline-large">Section 03</h3>
      </section>
    </>
  )
}
function Testimonials() {
  return (
    <>
      <section className="" aria-label="Section 04">
        <h4 className="headline-large">Section 04</h4>
      </section>
    </>
  )
}
function CallToAction_Products() {
  return (
    <>
      <section className="" aria-label="Section 05">
        <h5 className="headline-large">Section 06</h5>
      </section>
    </>
  )
}
function CallToAction_SocialMedia() {
  return (
    <>
      <section className="" aria-label="Section 06">
        <h6 className="headline-large">Section 07</h6>
      </section>
    </>
  )
}
