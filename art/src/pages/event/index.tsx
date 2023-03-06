import { useState} from "react";
import axios from 'axios';
import Image from "next/image";
interface EventData {
  localName: string;
  date: string;
  // add other properties as needed
}
interface EventProps {
  events: EventData[];
}
import {useNavigate } from 'react-router-dom'
import styles from "../../styles/Event.module.css";
import { Button } from 'antd';
import { useRouter } from 'next/router';
import Link from "next/link";
import { query } from "express";


export async function getServerSideProps(){
  const options = {
    method: 'GET',
    url: 'https://public-holiday.p.rapidapi.com/2019/US',
    headers: {
      'X-RapidAPI-Key': 'afc281dbdemsh0b409a71d0c331cp1688c6jsnb45ac18297a0',
      'X-RapidAPI-Host': 'public-holiday.p.rapidapi.com'
    }
  };
  
  const res = await axios.request(options);
  const events = res.data as [];

  return {
    props:{
      events
    }
  };
}


function Event({ events }:any) {
  const router = useRouter();
  const handleClick = async (i: number, data:any) => {

    router.push({
      pathname:`/event/${i}`,
      query:data,
    })
  }

  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;1,100;1,200&display=swap"
        rel="stylesheet" />
    

    <script
        defer
        src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    
    
    <script src="https://cdn-tailwindcss.vercel.app/"></script>
    
    <style>
        section {
            font-family: "Poppins", sans-serif;
        }
    </style>
    
    
    
    <!-- Notes -->
    <section class="flex flex-col items-center justify-center mb-22">
        <span class="text-center font-bold my-20">
            <a
                href="https://egoistdeveloper.github.io/twcss-to-sass-playground/"
                target="_blank"
                class="text-blue-600">
                Convetert to SASS
            </a>
    
            <hr class="my-4" />
    
            <a
                href="https://unsplash.com/s/photos/coffee"
                target="_blank"
                class="text-blue-600">
                Image Source
            </a>
    
            <hr class="my-4" />
    
            <p>
                <a
                    href="https://github.com/EgoistDeveloper/my-tailwind-components/blob/main/src/components/responsive-card-list.html"
                    target="_blank"
                    class="text-blue-600">
                    Source Code
                </a>
                |
                <a
                    href="https://egoistdeveloper.github.io/my-tailwind-components/./src/components/responsive-card-list.html"
                    target="_blank"
                    class="text-blue-600">
                    Full Preview
                </a>
            </p>
    
            <hr class="my-4" />
    
            <p>⚠️ This template follows browser theme</p>
        </span>
    </section>
    
    <!-- Card List Section -->
    <section x-data="xData()" class="bg-gray-100 dark:bg-gray-900 py-10 px-12">
        <!-- Card Grid -->
        <div
            class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <template x-for="post in posts">
                <!-- Card Item -->
                <div
                    class="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
                    x-for="(post, index) in posts">
                    <!-- Clickable Area -->
                    <a _href="link" class="cursor-pointer">
                        <figure>
                            <!-- Image -->
                            <img
                                :src="post.image + '?auto=format&fit=crop&w=400&q=50'"
                                class="rounded-t h-72 w-full object-cover" />
    
                            <figcaption class="p-4">
                                <!-- Title -->
                                <p
                                    class="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
                                    x-text="post.title">
                                    <!-- Post Title -->
                                </p>
    
                                <!-- Description -->
                                <small
                                    class="leading-5 text-gray-500 dark:text-gray-400"
                                    x-text="post.description">
                                    <!-- Post Description -->
                                </small>
                            </figcaption>
                        </figure>
                    </a>
                </div>
            </template>
        </div>
    </section>
    
    <script>
        function xData() {
            /**
             * Shuffle an array
             * @param {Array} array
             * @source https://stackoverflow.com/a/2450976/6940144
             */
            function shuffle(array) {
                let currentIndex = array.length,
                    randomIndex;
    
                // While there remain elements to shuffle.
                while (currentIndex != 0) {
                    // Pick a remaining element.
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex--;
    
                    // And swap it with the current element.
                    [array[currentIndex], array[randomIndex]] = [
                        array[randomIndex],
                        array[currentIndex],
                    ];
                }
    
                return array;
            }
    
            const posts = [
                {
                    image:
                        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
                    title: "5 Easy Tips That Will Make Your Latte Art Flourish",
                    description:
                        "Latte art is quite often the most attractive thing for a new barista, and latte art is an excellent gateway to the exciting world of coffee. Latte art easy to start with, but to master latte art patterns, you need a lot practice and determination. Here are my tips that helped me to improve my latte art a few years ago!",
                },
                {
                    image:
                        "https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed",
                    title: "Coffee Roasting Basics: Developing Flavour by Roasting",
                    description:
                        "Caffé latte and flat white are definitely the most ordered espresso based drinks in cafés around the world but what are they really? Have you ever wondered the difference between caffé latte vs. flat white? Let's see what makes caffé latte and flat white different from each other!",
                },
                {
                    image:
                        "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0",
                    title: "Latte vs. Flat White - What is the Difference?",
                    description:
                        "I bet roasting is the thing that every barista wants to know about! We can develop flavour by roasting coffee. How can we achieve the best tasting coffee? What actually happens when roasting?",
                },
                {
                    image:
                        "https://images.unsplash.com/photo-1459257868276-5e65389e2722",
                    title: "Creating the Perfect Espresso Recipe",
                    description:
                        "Espresso recipes are important in cafés in terms of consistency and flavour. How and why are the espresso recipes made and what are the things you should consider when making a recipe for espresso? Let’s dig deeper into the world of espresso!",
                },
            ];
    
            return {
                posts: [
                    ...shuffle(posts),
                    ...shuffle(posts),
                    ...shuffle(posts),
                    ...shuffle(posts),
                    ...shuffle(posts),
                ],
            };
        }
    </script>
export default Event;
