import React from "react";
import ImageZoom from "react-image-magnify";

const ResponsiveImageZoom = ({ src, alt }:any) => {
  return (
    <div className="relative w-full h-0" style={{ paddingBottom: "450px",width:"400px", height:"200px", marginTop: "40px"}}>
      <ImageZoom
        className="absolute left-1 top-6 w-full h-full object-cover"
        {...{
          smallImage: {
            alt: alt,
            isFluidWidth: true,
            src: `${src}?w=500`,
          },
          largeImage: {
            src: `${src}?w=1500`,
            width: 1200,
            height: 1200,
          },
          enlargedImageContainerDimensions: {
            width: "350%",
            height: "190%",
          },
          isHintEnabled: true,
        }} 
      />
    </div>
  );
};

export default ResponsiveImageZoom;
