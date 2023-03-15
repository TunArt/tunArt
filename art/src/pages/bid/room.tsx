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
  
const route=useRouter() 
  return (
    <div>
        
        <article key={index} className="flex max-w-xl flex-col items-start justify-between ml-12">
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.creationDate} className="text-gray-500">
                {post.creationDate}
              </time>
      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"  onClick={()=>{console.log(post,"mehdi")
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
                <a href={"#"}>
                  <span className="absolute inset-0" />
                  {post.name}
                </a>
              </h3>
              <img src={post.image} style={{width:"400px", height:"400px"}} className={styles.img} />
      
            </div>
            <h5>
            {timestamp}
            </h5>
            <div className="relative mt-8 flex items-center gap-x-4">
              <img src={post.artist.picture} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <a href={"#"}>
                    <span className="absolute inset-0" />
                    {post.artist.name}
                  </a>
                </p>
                <p className="text-gray-600">{post.artist.id}</p>
              </div>
            </div>
          </article>
    </div>
  );
}; 

export default Room;
