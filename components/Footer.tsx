import {Footer_Navigation} from "../lib/data";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="px-6 py-12 mx-auto max-w-7xl md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {Footer_Navigation.map((item) => (
            <a key={item.name} href={item.href} className="body-large">
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-6 h-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="body-small">
            &copy; {new Date().getFullYear()} Urban Greens Antigua, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}