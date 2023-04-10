import { HiCheck, HiQuestionMarkCircle, HiStar } from 'react-icons/hi'
import Appbar from "@/components/Appbar"
import Footer from "@/components/Footer"
import Image from 'next/image'
import { product, reviews } from '@/lib/data'
import Head from 'next/head'
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Microgreense
() {
  return (
    <>
      <Head>
        <title>Microgreens - Urban Greens Antigua</title>
      </Head>
      <Appbar />
      <main className="bg-primary-50">
        <div className="container p-4 mx-auto my-8 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          {/* Product details */}
          <div className="lg:max-w-lg lg:self-end">
            <nav aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-2">
                {product.breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
                  <li key={breadcrumb.id}>
                    <div className="flex items-center text-sm">
                      <a href={breadcrumb.href} className="title-small">
                        {breadcrumb.name}
                      </a>
                      {breadcrumbIdx !== product.breadcrumbs.length - 1 ? (
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="flex-shrink-0 w-5 h-5 ml-2 text-gray-300"
                        >
                          <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                        </svg>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-4">
              <h1 className="font-bold display-small">{product.name}</h1>
            </div>

            <section aria-labelledby="information-heading" className="mt-4">
              <h2 id="information-heading" className="sr-only">
                Product information
              </h2>

              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">{product.price}</p>

                <div className="pl-4 ml-4 border-l border-gray-300">
                  <h2 className="sr-only">Reviews</h2>
                  <div className="flex items-center">
                    <div>
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <HiStar
                            key={rating}
                            className={classNames(
                              reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                              'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">{reviews.average} out of 5 stars</p>
                    </div>
                    <p className="ml-2 body-medium">{reviews.totalCount} reviews</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-6">
                <p className="body-large">{product.description}</p>
              </div>

              <div className="flex items-center mt-6">
                <HiCheck className="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
                <p className="ml-2 body-medium">In stock and ready to ship</p>
              </div>
            </section>
          </div>

          {/* Product image */}
          <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
            <div className="relative overflow-hidden rounded-lg aspect-h-1 aspect-w-1">
              <Image fill src="/media/webse-main-image.jpg" alt="product image" className="object-cover object-center w-full h-full" />
            </div>
          </div>

          {/* Product form */}
          <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
            <section aria-labelledby="options-heading">
              <h2 id="options-heading" className="sr-only">
                Product options
              </h2>

              <form>
                <div className="mt-4">
                  <a href="#" className="inline-flex text-sm text-gray-500 group hover:text-gray-700">
                    <span>What size should I buy?</span>
                    <HiQuestionMarkCircle
                      className="flex-shrink-0 w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </a>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                  >
                    Add to bag
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </main>
      <Footer />

    </>
  )
}