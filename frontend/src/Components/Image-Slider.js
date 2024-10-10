import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export const Imageslider = () => {
  return (
    <ReactCompareSlider
      itemOne={
        <ReactCompareSliderImage
          src="./images/Normal-Retailer.WEBP"
          srcSet="./images/Normal-Retailer.WEBP"
          alt="Image one"
          className="sliderImagemobile"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          src="./images/SuperStar-Retailer.WEBP"
          srcSet="./images/SuperStar-Retailer.WEBP"
          alt="Image two"
          className="sliderImagemobile"
        />
      }
    />
  );
};

export default Imageslider;
