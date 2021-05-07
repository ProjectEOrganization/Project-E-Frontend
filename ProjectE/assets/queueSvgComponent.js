import React from "react";
import { SvgXml } from "react-native-svg";  
export default function onBoardingSvgComponent(){  
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1150.23" height="1265.741" viewBox="0 0 1150.23 1265.741">
  <defs>
    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#74bbfa"/>
      <stop offset="1" stop-color="#4077f2"/>
    </linearGradient>
  </defs>
  <path id="Path_5" data-name="Path 5" d="M-160.438,1004.283c48.679-31.327,178.475-104.792,308.46-84.017s201.6,78.281,300.724,28.473,212-143.6,251.985-261.642S850.442-145.2,850.442-145.2L21.515,151.042S-209.117,1035.61-160.438,1004.283Z" transform="translate(183.636 247.761) rotate(-7)" fill="url(#linear-gradient)"/>
  <path id="Path_4" data-name="Path 4" d="M-155.267,836.926C-95.9,765.05-42.931,695.313,105.209,642.989s206.368-15.846,272.986-29.05,178.213-47.644,281.17-217.153S801.476-158.472,801.476-158.472L60.425-11.948S-214.634,908.8-155.267,836.926Z" transform="translate(203.875 337.017) rotate(-7)" fill="#fff" opacity="0.138"/>
  <path id="Path_3" data-name="Path 3" d="M-169.919,828.254c23.085-58.578,95.4-191.717,195.272-270S212.994,439.518,340.8,403.032s240.721-89.057,328.975-239.944,78.015-295.615,78.015-295.615L214.6-43.941,11.448,69.164S-193,886.832-169.919,828.254Z" transform="translate(189.4 322.588) rotate(-7)" fill="#fff" opacity="0.138"/>
</svg>


`;
  const SvgImage = () => <SvgXml xml={svgMarkup} />;  
  
  return <SvgImage />;
  }