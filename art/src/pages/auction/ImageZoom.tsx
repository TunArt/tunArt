import React from "react";
import ImageZoom from "react-image-magnify";

const ResponsiveImageZoom = ({ src, alt }:any) => {
  return (
    <div className="relative w-full h-0" style={{ paddingBottom: "100%" }}>
      <ImageZoom
        className="absolute top-0 left-0 w-full h-full object-cover"
        {...{
          smallImage: {
            alt: alt,
            isFluidWidth: true,
            src: `${src}?w=400`,
          },
          largeImage: {
            src: `${src}?w=800`,
            width: 800,
            height: 800,
          },
          enlargedImageContainerDimensions: {
            width: "200%",
            height: "200%",
          },
          isHintEnabled: true,
        }}
      />
    </div>
  );
};

export default ResponsiveImageZoom;
