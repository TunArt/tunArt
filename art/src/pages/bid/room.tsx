import { useState } from 'react';
import styles from "src/styles/bid.module.css"
import ImageZoom from './ImageZoom';

import { useRouter } from 'next/router';

const timestamp = new Date().toISOString(); 
interface RoomProps {
        post: any;
        index: number;
  }

  const Room: React.FC<RoomProps> = ({ post, index }) => {
  console.log('post',post)
const route=useRouter() 
  return (
    <div>

        
        <article key={index} className="flex max-w-xl flex-col items-start justify-between ml-12">
            <div className="flex items-center gap-x-4 text-xs">
              {/* <time dateTime={post.datetime} className="text-gray-500">
               kk
              </time> */}
      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"  onClick={()=>{
       ;route.push({ query: post,pathname:"/bid/Bid"})}}>
                Join Room
              </button>
              {/* <a
                href={post.category.href}
                className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
              >
                {post.category.title}
              </a> */}
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                {/* <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a> */}
              </h3>
              <img src={post.image} className={styles.img} />
      
            </div>
            <h5>
            {timestamp}
            </h5>
            {/* <div className="relative mt-8 flex items-center gap-x-4">
              <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <a href={"#"}>
                    <span className="absolute inset-0" />
                    {post.artist.name}
                  </a>
                </p>
                <p className="text-gray-600">{post.author.role}</p>
              </div> */}
            {/* </div> */}
          </article>
    </div>
  );
}; 

export default Room;
