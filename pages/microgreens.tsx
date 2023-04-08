import Appbar from '@/components/Appbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function microgreens() {
  return (
    <>
      <Appbar />
      <main className="wrapper-sapce wrapper">
        <section className="max-w-4xl">
          <h1 className="font-bold headline-large">Headline 01</h1>
          <p className="body-large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente unde reiciendis expedita obcaecati modi consequatur maiores minima aspernatur labore sint veniam ea hic, voluptas blanditiis voluptatem molestiae velit veritatis. Nesciunt.</p>
        </section>
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <MicroGreensCard />
          <MicroGreensCard />
          <MicroGreensCard />
          <MicroGreensCard />
          <MicroGreensCard />
          <MicroGreensCard />
        </section>
      </main>
      <Footer />
    </>
  )
}

function MicroGreensCard() {
  return (
    <>
      <Link href="/microgreens/*" className="p-4 overflow-hidden transition-all divide-y divide-gray-200 bg-primary-100 hover:bg-primary-200 dark:bg-primary-950 dark:hover:bg-primary-900 rounded-xl">
        <div className="relative px-4 py-5 sm:p-6 h-[240px]">
          <Image fill quality={40} src="/media/webse-main-image.jpg" alt="" className='object-cover object-center rounded-xl hover:opacity-95' />
        </div>
        <div className="py-4">
          <h2 className="font-bold title-large">Card Title Goes Here</h2>
          <p className="mt-2 body-large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas voluptatum totam eligendi placeat, assumenda impedit omnis!</p>
          <button
            type="button"
            className="px-2 mt-4 inline-flex gap-2 items-center py-1.5 body-small font-semibold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>

            Button text
          </button>
        </div>
      </Link>
    </>
  )
}