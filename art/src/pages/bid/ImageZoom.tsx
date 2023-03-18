import React from "react";
import ImageZoom from "react-image-magnify";

const ResponsiveImageZoom = ({ src, alt }:any) => {
  return (
    <div className="relative w-full h-0" style={{ paddingBottom: "0px",width:"350px", height:"200px", marginTop: "0px"}}>
      <ImageZoom
        className="absolute left-1 top-3 w-full h-full object-cover"
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
            width: "330%",
            height: "190%",
          },
          isHintEnabled: true,
        }} 
      />
    </div>
  );
};

export default ResponsiveImageZoom;
