import { Fragment, useState,useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image"
import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import 'material-icons/iconfont/material-icons.css';
import { useRouter } from 'next/router'
import axios from 'axios'
type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
};


export default function Example(props: any) {
  const [data, setdata] = useState([])
  const [User, setUser] = useState("")
  //console.log("from nav bar", props);
  useEffect(() => {  
    console.log(localStorage.getItem('id'));
    axios.get(`http://localhost:3000/api/users/getUser/${localStorage.email}`)     
     .then(res => {
        if (!res.data) throw Error ('access denied')
        setdata(res.data)
        setUser("user")
        console.log('current user', res.data);
      })
      .catch(err => {
    axios.get(`http://localhost:3000/api/artists/getArtist/${localStorage.email}`)
        .then(res => {
        console.log("current user",res)
        setdata(res.data)
        ;
        })
  });
  }, []);
    const navigation = [
    { name: 'Art Gallery', href: `/MainPage/art/art?id=${props.id}`, current: false },
    { name: 'Shop', href: `/shop?id=${props.id}`, current: false },
    { name: 'Auctions', href: `/bid?${props.id}`, current: false },
    { name: "Events", href: `/event`, current: false },
    { name: 'Contact Us', href: '/MainPage/contactUs/', current: false },
    { name: 'About Us', href: '/MainPage/aboutUs/', current: false },
    { name: 'Reports', href: '/MainPage/reports/', current: false }
  ]
  const userNavigation = [
    { name: 'Your Profile', href: '/profile/' },
    { name: 'Settings', href: '#' },
    {
      name: 'Sign out', href: '/', work: function () {
        localStorage.clear()
      }
    },
  ]

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
const route=useRouter()
  return (

    <nav className="min-h-full">
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full ">

        <Disclosure as="nav" className="bg-gray-700">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                  <Image
                className="h-10 w-10 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                onClick={() => {
                  route.push("/MainPage")
                }}
                src="/tunart-website-favicon-color.png"
                alt="Your Company"
                width={500}
                height={500}
              />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>

                    </div>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-full shadow-md hover:bg-gray-100">
  <span className="material-icons-sharp text-2xl text-gray-800 cursor-pointer" onClick={() => {
    props.setShowcart(!props.showCart)
  }}>shopping_cart</span>
</div>

                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={data ? data.picture : "https://api-private.atlassian.com/users/32c35f79f4748ebc75948b11587d3ff9/avatar"} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >

                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    onClick={item.work && item.work}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>

                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>

                  ))}
                </div>
                <div className="border-t border-gray-700 pt-4 pb-3">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={data.picture} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{User ? data.userName : data.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{data.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <a onClick={item.work && item.work}
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </div>
    </nav>
  )
}