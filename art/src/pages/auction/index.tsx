import { useState } from 'react';
import ImageZoom from '../bid/ImageZoom';
import style from "src/styles/bid.module.css"
function index() {
  const [images, setImages] = useState([  "https://example.com/image1.jpg",  "https://example.com/image2.jpg",  "https://example.com/image3.jpg",]);

  const handleImageChange = () => {
    setImages((prevImages:any) => {
      const newIndex = (prevImages.indexOf(currentImage) + 1) % prevImages.length;
      return prevImages[newIndex];
    });
  };
  

  return (
    <div className={style.i}>
      <ImageZoom
        src="https://d31cksjl6r6w9h.cloudfront.net/60deefe4510fef5af83262f2/media-library/400xauto/8a32df238274cc.jpg"
        alt="img"
      />
      <div className="relative">
  {images.map((image, index) => (
    <img
      key={index}
      src={image}
      className="absolute inset-0 z-10 object-cover w-full h-full transition-opacity duration-500"
     // style={{ opacity: index === currentIndex ? 1 : 0 }}
    />
  ))}
</div>

    </div>
  );
};

export default index
