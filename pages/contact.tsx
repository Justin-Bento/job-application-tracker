import Head from "next/head";
import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Urban Greens Antigua</title>
      </Head>
      <Appbar />
      <main className="relative isolate bg-primary-50">
        <div className="container grid grid-cols-1 mx-auto lg:grid-cols-2">
          <div className="relative px-6 lg:static lg:px-8 lg:py-48">
            <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-lg">
              <h2 className="capitalize display-small font-bolld">Get in touch</h2>
              <p className="mt-2 body-large">
                Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt
                integer elementum id sem. Arcu sed malesuada et magna.
              </p>

            </div>
          </div>
          <form action="#" method="POST" className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
            <div className="max-w-xl mx-auto lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block font-semibold capitalize title-small">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block font-semibold capitalize title-small">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block font-semibold capitalize title-small">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone-number" className="block font-semibold capitalize title-small">
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block font-semibold capitalize title-small">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-8">
                <button
                  type="submit"
                  className="rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
