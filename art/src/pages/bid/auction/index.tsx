// import { Fragment, useState } from 'react'
// import { Dialog, RadioGroup, Transition } from '@headlessui/react'
// import { XMarkIcon } from '@heroicons/react/24/outline'
// import { StarIcon } from '@heroicons/react/20/solid'
// import style from "src/styles/bid.module.css"

// const product = {
//   name: 'Basic Tee 6-Pack ',
//   price: '$192',
//   rating: 3.9,
//   reviewCount: 117,
//   href: '#',
//   imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
//   imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
//   colors: [
//     { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
//     { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
//     { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
//   ],
//   sizes: [
//     { name: 'XXS', inStock: true },
//     { name: 'XS', inStock: true },
//     { name: 'S', inStock: true },
//     { name: 'M', inStock: true },
//     { name: 'L', inStock: true },
//     { name: 'XL', inStock: true },
//     { name: 'XXL', inStock: true },
//     { name: 'XXXL', inStock: false },
//   ],
// }

// function classNames(...classes:any) {
//   return classes.filter(Boolean).join(' ')
// }

// const index = () => {
//   const [open, setOpen] = useState(false)
//   const [selectedColor, setSelectedColor] = useState(product.colors[0])
//   const [selectedSize, setSelectedSize] = useState(product.sizes[2])

//   return (<div className={style.i}>
//     <Transition.Root show={open} as={Fragment} >
//       <Dialog as="div" className="relative z-10" onClose={setOpen}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"   
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
//         </Transition.Child>

//         <div className="fixed inset-0 z-10 overflow-y-auto">
//           <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
//               enterTo="opacity-100 translate-y-0 md:scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 translate-y-0 md:scale-100"
//               leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
//             >
//               <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
//                 <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
//                   <button
//                     type="button"
//                     className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
//                     onClick={() => setOpen(false)}
//                   >
//                     <span className="sr-only">Close</span>
//                     <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                   </button>

//                   <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
//                     <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
//                       <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center" />
//                     </div>
//                     <div className="sm:col-span-8 lg:col-span-7">
//                       <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>

//                       <section aria-labelledby="information-heading" className="mt-2">
//                         <h3 id="information-heading" className="sr-only">
//                           Product information
//                         </h3>

//                         <p className="text-2xl text-gray-900">{product.price}</p>

//                         {/* Reviews */}
//                         <div className="mt-6">
//                           <h4 className="sr-only">Reviews</h4>
//                           <div className="flex items-center">
//                             <div className="flex items-center">
//                               {[0, 1, 2, 3, 4].map((rating) => (
//                                 <StarIcon
//                                   key={rating}
//                                   className={classNames(
//                                     product.rating > rating ? 'text-gray-900' : 'text-gray-200',
//                                     'h-5 w-5 flex-shrink-0'
//                                   )}
//                                   aria-hidden="true"
//                                 />
//                               ))}
//                             </div>
//                             <p className="sr-only">{product.rating} out of 5 stars</p>
//                             <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
//                               {product.reviewCount} reviews
//                             </a>
//                           </div>
//                         </div>
//                       </section>

//                       <section aria-labelledby="options-heading" className="mt-10">
//                         <h3 id="options-heading" className="sr-only">
//                           Product options
//                         </h3>

//                         <form>
//                           {/* Colors */}
//                           <div>
//                             <h4 className="text-sm font-medium text-gray-900">Color</h4>

//                             <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
//                               <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
//                               <span className="flex items-center space-x-3">
//                                 {product.colors.map((color) => (
//                                   <RadioGroup.Option
//                                     key={color.name}
//                                     value={color}
//                                     className={({ active, checked }) =>
//                                       classNames(
//                                         color.selectedClass,
//                                         active && checked ? 'ring ring-offset-1' : '',
//                                         !active && checked ? 'ring-2' : '',
//                                         'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
//                                       )
//                                     }
//                                   >
//                                     <RadioGroup.Label as="span" className="sr-only">
//                                       {' '}
//                                       {color.name}{' '}
//                                     </RadioGroup.Label>
//                                     <span
//                                       aria-hidden="true"
//                                       className={classNames(
//                                         color.class,
//                                         'h-8 w-8 rounded-full border border-black border-opacity-10'
//                                       )}
//                                     />
//                                   </RadioGroup.Option>
//                                 ))}
//                               </span>
//                             </RadioGroup>
//                           </div>

//                           {/* Sizes */}
//                           <div className="mt-10">
//                             <div className="flex items-center justify-between">
//                               <h4 className="text-sm font-medium text-gray-900">Size</h4>
//                               <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
//                                 Size guide
//                               </a>
//                             </div>

//                             <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
//                               <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
//                               <div className="grid grid-cols-4 gap-4">
//                                 {product.sizes.map((size) => (
//                                   <RadioGroup.Option
//                                     key={size.name}
//                                     value={size}
//                                     disabled={!size.inStock}
//                                     className={({ active }) =>
//                                       classNames(
//                                         size.inStock
//                                           ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
//                                           : 'cursor-not-allowed bg-gray-50 text-gray-200',
//                                         active ? 'ring-2 ring-indigo-500' : '',
//                                         'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
//                                       )
//                                     }
//                                   >
//                                     {({ active, checked }) => (
//                                       <>
//                                         <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
//                                         {size.inStock ? (
//                                           <span
//                                             className={classNames(
//                                               active ? 'border' : 'border-2',
//                                               checked ? 'border-indigo-500' : 'border-transparent',
//                                               'pointer-events-none absolute -inset-px rounded-md'
//                                             )}
//                                             aria-hidden="true"
//                                           />
//                                         ) : (
//                                           <span
//                                             aria-hidden="true"
//                                             className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
//                                           >
//                                             <svg
//                                               className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
//                                               viewBox="0 0 100 100"
//                                               preserveAspectRatio="none"
//                                               stroke="currentColor"
//                                             >
//                                               <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
//                                             </svg>
//                                           </span>
//                                         )}
//                                       </>
//                                     )}
//                                   </RadioGroup.Option>
//                                 ))}
//                               </div>
//                             </RadioGroup>
//                           </div>

//                           <button
//                             type="submit"
//                             className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                           >
//                             Add to bag
//                           </button>
//                         </form>
//                       </section>
//                     </div>
//                   </div>
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//     </div>
//   )
// }
// export default index
// // import React from 'react'
// // import style from "src/styles/bid.module.css"

// // const index = () => {
// //   return (
// //     <div className={style.i}>index</div>
// //   )
// // }

// // export default index


/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                  <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {' '}
                          {color.name}{' '}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size guide
                  </a>
                </div>

                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                  <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                              : 'cursor-not-allowed bg-gray-50 text-gray-200',
                            active ? 'ring-2 ring-indigo-500' : '',
                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-indigo-500' : 'border-transparent',
                                  'pointer-events-none absolute -inset-px rounded-md'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
