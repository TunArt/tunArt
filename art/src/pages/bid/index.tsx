import { useState,useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import NavBar from '../../components/navBar'
import Link from 'next/link'
import Room from './room'
import Footer from '../MainPage/footer/footer'
import styles from "../../styles/principale.module.css"

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    img:
      "https://d31cksjl6r6w9h.cloudfront.net/60dee17a510fef5af831d96e/media-library/400xauto/colorfull-feline-1_66bddfc9ccc6f5.png",
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Boost your conversion rate',
    href: '#',
    img:
      "https://d31cksjl6r6w9h.cloudfront.net/60dec968510fef5af830e147/media-library/400xauto/73945958-46D6-4D86-A41B-2417F87BC85D_fabd23f2ed658c.jpeg",
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Boost your conversion rate',
    href: '#',
    img:
      "https://d31cksjl6r6w9h.cloudfront.net/60deefe4510fef5af83262f2/media-library/400xauto/1B4B2B9E-CBC4-4FAD-90F5-2FB757D5BF10_847dc8fc248059.jpeg",
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 4,
    title: 'Boost your conversion rate',
    href: '#',
    img:
      "https://d31cksjl6r6w9h.cloudfront.net/60decb43510fef5af830f892/media-library/400xauto/Ordinary-demons-M_03f824fb7e1260.jpg",
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 5,
    title: 'Boost your conversion rate',
    href: '#',
    img:
      "https://d31cksjl6r6w9h.cloudfront.net/60dec96b510fef5af830e1a7/media-library/400xauto/In-silence-and-fog_oil-on-canvas_50x50cm_afab8326fb651d.jpg",
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 6,
    title: 'Boost your conversion rate',
    href: '#',
    img:
    "https://d31cksjl6r6w9h.cloudfront.net/60deefe4510fef5af83262f2/media-library/400xauto/8a32df238274cc.jpg",
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]


const Bids: React.FC = () => {
  useEffect(() => {
    const h1 = document.querySelector("h1");
    if (h1) {
      h1.classList.add("animate-pulse", "text-4xl", "font-bold", "text-blue-600");
    }
  }, []);

    // your posts data here

  return (
    <div className="bg-black">
      <NavBar />
      <h1 className=" text-center py-10">Welcome to the bid room</h1>
      <div className=" mx-auto max-w-7xl grid grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 py-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post, index) => (
          <Room key={post.id} post={post} index={index} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Bids;