import react from "react";
import AOS from "aos";
import { useEffect } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export const Imageslider = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <ReactCompareSlider
      data-aos="zoom-in-up"
      itemOne={
        <ReactCompareSliderImage
          src="./images/Normal-Retailer.webp"
          srcSet="./images/Normal-Retailer.webp"
          alt="Image one"
          className="sliderImagemobile"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          src="./images/SuperStar-Retailer.webp"
          srcSet="./images/SuperStar-Retailer.webp"
          alt="Image two"
          className="sliderImagemobile"
        />
      }
    />
  );
};

export default Imageslider;
