import { Fragment, useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Backet from "../../components/backet/backet";
import { useRouter } from "next/router";
import axios from "axios";
import { Alert, Space } from "antd";

type Product = {
  id: number;
  name: string;
  description: string;
  rating: number;
  comments: string;
  price: number;
  quantity: number;
  brand: string;
  picture: any;
};
const product: Product = {
  rating: 3.9,
  reviewCount: 117,

};

function classNames(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Item() {
  const [backetShow, setbacketShow] = useState(false);
  const route = useRouter();
  const { query } = route || {};
  const items = String(query?.items);
  const item = JSON.parse(items);
  console.log("item from [items]", item)
  let quantityBought = ""
  const [open, setOpen] = useState(true);
  const images = JSON.parse(item.picture)
  const [err,setErr]=useState(false)
  // const [images,setImages]=useState()
  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };
  console.log("images for [item]", images)
  const [currentImage, setCurrentImage] = useState(images[0]);
  const handleADD = (x: string, y: string) => {
    console.log("this should be the user id ", x)
    axios.post(`http://localhost:3000/api/route/bought/${x}/${y}`, {
      quantityBought: quantityBought,
    }).then((res) => {
      console.log(res)
      route.push("/shop");
    });
  };
  return (
    <Transition show={true}>
      <Transition.Child as={"div"}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 hidden bg-gray-800 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                enterTo="opacity-100 translate-y-0 md:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              >
                <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                  <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <button
                      type="button"
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                      onClick={() => {
                        route.push({
                          pathname: "/shop",
                        });
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                      <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                        <div>
                          <img src={currentImage} alt="Main image" />
                          <div className="flex flex-wrap">
                            {images.map((imageUrl) => (
                              <div
                                key={imageUrl}
                                className="w-1/3 px-2 py-2"
                                onClick={() => handleImageClick(imageUrl)}
                              >
                                <img
                                  src={imageUrl}
                                  alt="Thumbnail"
                                  className="max-w-full max-h-full object-contain mx-auto"
                                />
                              </div>
                            ))}
                          </div>



                        </div>
                      </div>
                      <div className="sm:col-span-8 lg:col-span-7">
                        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                          {item.name}
                        </h2>

                        <section
                          aria-labelledby="information-heading"
                          className="mt-2"
                        >
                          <h3 id="information-heading" className="sr-only">
                            Product information
                          </h3>

                          <p className="text-2xl text-gray-900">{item.price}</p>

                          {/* Reviews */}
                          <div className="mt-6">
                            <h4 className="sr-only">Reviews</h4>
                            <div className="flex items-center">
                              <div className="flex items-center">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                  <StarIcon
                                    key={rating}
                                    className={classNames(
                                      product.rating > rating
                                        ? "text-gray-900"
                                        : "text-gray-200",
                                      "h-5 w-5 flex-shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                ))}
                              </div>
                              <p className="sr-only">
                                {product.rating} out of 5 stars
                              </p>
                              <a
                                href="#"
                                className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                {product.reviewCount} reviews
                              </a>
                            </div>
                          </div>
                        </section>

                        <section
                          aria-labelledby="options-heading"
                          className="mt-10"
                        >
                          <h3 id="options-heading" className="sr-only">
                            Product options
                          </h3>

                          <form>
                            {/* Colors */}
                            <div>
                              <h4 className="text-sm font-medium text-gray-900">
                                Color
                              </h4>

                              <RadioGroup className="mt-4">
                                <RadioGroup.Label className="sr-only">
                                  {" "}
                                  Choose a color{" "}
                                </RadioGroup.Label>
                                <span className="flex items-center space-x-3">
                                  <h3>quantity : </h3>
                                  <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="1"
                                    onChange={(e) => {
                                      quantityBought = e.target.value

                                    }}
                                  />
                                </span>
                              </RadioGroup>
                            </div>

                            {/* Sizes */}
                            <div className="mt-10">
                              <div className="flex items-center justify-between">
                                <h4 className="text-sm font-medium text-gray-900">
                                  Quantity : {item.quantity}
                                </h4>
                              </div>

                              <RadioGroup className="mt-4">
                                <RadioGroup.Label className="sr-only">
                                  {" "}
                                  Choose a size{" "}
                                </RadioGroup.Label>
                                <div className="grid grid-cols-4 gap-4"></div>
                              </RadioGroup>
                            </div>

                            {console.log("item.quality",typeof(parseInt(quantityBought) ))}
                            <button
                              onClick={(e) => {
                                e.preventDefault()
                                
                                console.log("quantityBought",quantityBought)
                                let Qn= parseInt(quantityBought)
                                console.log("mmmmmmmmmmmmmmm",Qn-item.quantity)
                                if (-Qn + (item.quantity) < 0) {
                                  alert('test')
                                  setErr(true)
                                  return false
                                }
                                else{handleADD(window?.localStorage.id, item.id)}
                                
                              }}
                              className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                              Add to bag
                            </button>
                            {err && <div>
                              <Space direction="vertical" style={{ width: '100%' }}>
                                    <Alert message="Sorry, we don't have enough quantity in stock" type="error" />
                                  </Space></div>}
                          </form>
                        </section>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Child>
    </Transition>
  );
}
