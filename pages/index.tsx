import Footer from "@/components/Footer";
import Appbar from "@/components/Appbar";
import Image from "next/image";
import { FAQs, incentives } from "@/lib/data";
import Logo from "@/components/Logo";
import Link from "next/link";

export default function index() {
  return (
    <>
      <Appbar />
      <main className="bg-white dark:bg-black">
        <div className="container mx-auto sm:px-6 lg:px-8 space-y-28 lg:py-28">
          <section id="hero" className="space-y-6">
            <div className="max-w-[90ch] mx-auto text-center mb-8">
              <div className="justify-start hidden sm:flex sm:justify-center">
                <div className="relative px-3 py-1 text-sm leading-6 rounded-full text-primary dark:text-primary-50 ring-1 ring-black/20">
                  Anim aute id magna aliqua ad ad non deserunt sunt.
                  <a href="#" className="font-semibold ml-2">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-dark my-5">Sustainable Microgreens, Unbeatable Flavor!</h1>
              <p className="">
                Our microgreens are packed with nutrients and flavor, making them the perfect addition to any meal. From
                salads to smoothies, sandwiches to sushi, the possibilities are endless. Plus, with our convenient
                delivery service, you can easily incorporate microgreens into your diet without leaving your home.
              </p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <button className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light">
                Preview Our Greens
              </button>
              <button className="inline-flex items-center rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-primary shadow-sm ring-1 ring-primary hover:bg-primary-light/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                About Urban Greens
              </button>
            </div>
            <div className="relative w-full aspect-[16/9] object-bottom">
              <Image
                fill
                quality={40}
                src="/media/urban-greens-antigua-hero.jpg"
                alt="Hodges Bay Club garnished with our Island Microgreens"
                className="object-cover object-center rounded-xl"
              />
            </div>
          </section>
          {/* End of Section #1 */}
          <section>
            <div className="grid max-w-2xl grid-cols-1 px-4 mx-auto gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="text-left sm:flex lg:block md:text-center">
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <div className="relative h-24 mx-auto w-28 ">
                        <Image
                          fill
                          quality={40}
                          src={incentive.imageSrc}
                          alt=""
                          className="object-cover object-center "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 sm:ml-3 sm:mt-0 lg:ml-0 lg:mt-3">
                    <h3 className="text-xl font-medium">{incentive.name}</h3>
                    <p className="mt-2 text-sm opacity-80">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* End of Section #2 */}
          <section className="bg-secondary relative overflow-hidden text-center isolate sm:rounded-3xl sm:px-16 py-24 px-6 lg:px-8">
            <h5 className="font-bold headline-small">Make Microgreens Part Of Your Diet Today!</h5>
            <p className="mt-4 text-lg body-large lg:max-w-prose lg:mx-auto ">
              Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
              commodo do ea.
            </p>
            <div className="flex items-center justify-center mt-10 gap-x-6">
              <a
                href="#"
                className="px-3 py-2 text-sm font-semibold rounded-md text-white bg-black hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Order Today
              </a>
              <a
                href="#"
                className="px-3 py-2 text-sm font-semibold bg-transparent rounded-md text-primary-600 ring-1 ring-inset ring-black hover:bg-black/5"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </section>
          {/* End of Section #3 */}
          <section>
            <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
              <div>
                <h3 className="mb-4 font-bold capitalize text-3xl">Clear overview for efficient tracking</h3>
                <p className="mb-5 text-base">
                  Handle your subscriptions and transactions efficiently with the clear overview in Dashboard. Features
                  like the smart search option allow you to quickly find any data you&#39;re looking for.
                </p>
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-primary shadow-sm ring-1 ring-primary hover:bg-primary-light/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Button text
                </button>
              </div>
              <div className="w-full h-[420px] relative bg-primary-200 dark:bg-primary-900 rounded-xl">
                <Image
                  fill
                  quality={40}
                  src="/media/urban-greens-auntigua.jpg"
                  alt=""
                  aria-label="micro-greens-inside-steak sandwitch"
                  className="object-cover object-center rounded-xl"
                />
              </div>
            </div>
            <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
              <div className="order-none md:order-2">
                <h3 className="mb-4 font-bold capitalize text-3xl">Decide how you integrate Payments</h3>
                <p className="mb-5 text-base">
                  Love to code? Next to our ready-made and free plugins you can use our expansive yet simple API; decide
                  how you integrate Payments and build advanced and reliable products yourself from scratch.
                </p>
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-primary shadow-sm ring-1 ring-primary hover:bg-primary-light/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Button text
                </button>
              </div>
              <div className="w-full h-[420px] relative bg-primary-200 dark:bg-primary-900 rounded-xl">
                <Image
                  fill
                  quality={40}
                  src="/media/micro-greens-with-steak.jpg"
                  alt=""
                  aria-label="micro-greens-inside-steak sandwitch"
                  className="object-cover object-center rounded-xl"
                />
              </div>
            </div>
          </section>
          {/* End of Section #4 */}
          <section className="relative overflow-hidden text-left isolate sm:rounded-3xl px-6 py-24 sm:px-16 rounded-xl bg-secondary">
            <div className="relative max-w-2xl mx-auto lg:mx-0">
              <div className="relative w-auto h-12">
                <Logo classNames="w-20 h-20 fill-gray-900 hover:opacity-80 transition-all" />
              </div>
              <figure>
                <blockquote className="mt-6 font-bold title-large">
                  <p>
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente
                    alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 body-large">
                  <div className="font-semibold">Judith Black</div>
                  <div className="mt-1">CEO of Workcation</div>
                </figcaption>
              </figure>
            </div>
          </section>
          {/* End of Section #5 */}
          <section>
            <h2 className="mt-2 text-3xl font-bold tracking-tight capitalize text-primary-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="max-w-3xl mt-6 text-lg leading-8 text-primary-800">
              Have a different question and can&#39;t find the answer you&#39;re looking for? Reach out to our support
              team by
              <Link
                href="mailto:info@urbangreensanu.com"
                className="font-semibold text-primary-600 hover:text-primary-500"
              >
                sending us an email
              </Link>
              and we&#39;ll get back to you as soon as we can.
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
          </section>
          {/* End of Section #6 */}
        </div>
      </main>
      <Footer />
    </>
  );
}
