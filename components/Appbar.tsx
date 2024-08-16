import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';
import { Appbar_Navigation } from "../lib/data";

import Logo from "@/components/Logo";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-black shadow-sm border-b">
      <nav className="flex items-center justify-between container mx-auto sm:px-6 lg:px-8 py-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Logo classNames="w-20 h-12 fill-gray-900 hover:opacity-80 transition-all" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-700 dark:text-primary-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <HiMenu className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {Appbar_Navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-primary-900 dark:text-primary-50">
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-primary-100 dark:bg-primary-950 sm:max-w-sm sm:ring-1 sm:ring-primary-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Logo width={48} height={48} classNames="w-10 h-10"/>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-primary-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <HiX className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-primary-500/10">
              <div className="py-6 space-y-2">
                {Appbar_Navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg text-primary-900 dark:text-primary-100 hover:bg-primary-50 hover:dark:bg-primary-900"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
