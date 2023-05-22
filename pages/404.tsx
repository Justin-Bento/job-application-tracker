import Link from "next/link";

export default function Error404() {
  return (
    <main className="w-full h-[90vh] flex place-content-center place-items-center">
      <div className="text-center">
        <p className="text-base font-semibold text-primary-600">404</p>
        <h1 className="mt-2 font-bold capitalize display-medium">Page not found.</h1>
        <p className="mt-2 body-large">Sorry, we couldn&#39;t find the page you&#39;re looking for.</p>
        <div className="mt-6">
          <Link href="/" className="text-base font-medium text-primary-600 hover:text-primary-500">
            Go back home
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
