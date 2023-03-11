import ImageZoom from './ImageZoom';
import style from "src/styles/bid.module.css"
function ProductPage() {
  return (
    <div className={style.i}>
      <ImageZoom
        src="https://d31cksjl6r6w9h.cloudfront.net/60deefe4510fef5af83262f2/media-library/400xauto/8a32df238274cc.jpg"
        alt="img"
      />
    </div>
  );
};

export default ProductPage
