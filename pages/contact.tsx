import Head from "next/head";
import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import { HiChevronDown, HiPhone } from "react-icons/hi";
import { Switch } from "@headlessui/react";
import { useState } from "react";

export default function Contact() {
  

  return (
    <>
      <Head>
        <title>Contact - Urban Greens Antigua</title>
        <meta name="title" content="Urban Greens Antigua" />
        <meta name="description" content="Discover the unbeatable flavor and nutritional benefits of incorporating sustainable microgreens into your lifestyle in Antigua & Barbuda" />
      </Head>
      <Appbar />
      <main className="">
        <section className="py-24 bg-primary-300 wrapper rounded-b-xl">
          <div className="p-4 wrapper">
            <h2 className="font-bold display-small">Get in touch</h2>
            <p className=" body-large">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
          </div>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}


function ContactForm() {
  const [agreed, setAgreed] = useState(false)
  return (
    <form action="#" method="POST" className="p-4 my-8 wrapper">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label htmlFor="first-name" className="block font-semibold body-medium">
          Full Name
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="block w-full rounded-md bg-white/0 border-0 px-3.5 py-2 text-primary-900 shadow-sm ring-1 ring-inset ring-primary-300 placeholder:text-primary-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="company" className="block font-semibold body-medium">
          Company
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="company"
            id="company"
            autoComplete="organization"
            className="block w-full bg-white/0  rounded-md border-0 px-3.5 py-2 text-primary-900 shadow-sm ring-1 ring-inset ring-primary-300 placeholder:text-primary-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block font-semibold body-medium">
          Email
        </label>
        <div className="mt-2.5">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            className="block w-full bg-white/0  rounded-md border-0 px-3.5 py-2 text-primary-900 shadow-sm ring-1 ring-inset ring-primary-300 placeholder:text-primary-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="phone-number" className="block font-semibold body-medium">
          Phone number
        </label>
        <div className="relative mt-2.5">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <label htmlFor="country" className="sr-only">
              Country
            </label>
            <select
              id="country"
              name="country"
              className="h-full py-0 pl-4 bg-transparent border-0 rounded-md text-primary-400 bg-none pr-9 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm"
            >
              <option>US</option>
              <option>CA</option>
              <option>EU</option>
            </select>
            <HiChevronDown
              className="absolute top-0 w-5 h-full pointer-events-none text-primary-400 right-3"
              aria-hidden="true"
            />
          </div>
          <input
            type="tel"
            name="phone-number"
            id="phone-number"
            autoComplete="tel"
            className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-primary-900 shadow-sm ring-1 ring-inset ring-primary-300 placeholder:text-primary-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block font-semibold body-medium">
          Message
        </label>
        <div className="mt-2.5">
          <textarea
            name="message"
            id="message"
            rows={4}
            className="block w-full bg-white/0  rounded-md border-0 px-3.5 py-2 text-primary-900 shadow-sm ring-1 ring-inset ring-primary-300 placeholder:text-primary-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            defaultValue={''}
          />
        </div>
      </div>
      <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
        <div className="flex items-center h-6">
          <Switch
            checked={agreed}
            onChange={setAgreed}
            className={classNames(
              agreed ? 'bg-primary-600' : 'bg-primary-200',
              'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-primary-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'
            )}
          >
            <span className="sr-only">Agree to policies</span>
            <span
              aria-hidden="true"
              className={classNames(
                agreed ? 'translate-x-3.5' : 'translate-x-0',
                'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-primary-900/5 transition duration-200 ease-in-out'
              )}
            />
          </Switch>
        </div>
        <Switch.Label className="text-sm leading-6 text-primary-600">
          By selecting this, you agree to our{' '}
          <a href="#" className="font-semibold text-primary-600">
            privacy&nbsp;policy
          </a>
          .
        </Switch.Label>
      </Switch.Group>
    </div>
    <div className="mt-10">
      <button
        type="submit"
        className="block w-full rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
      >
        Let's talk
      </button>
    </div>
  </form>
  )
}