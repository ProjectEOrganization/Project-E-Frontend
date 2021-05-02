import React from "react";
import { SvgXml } from "react-native-svg";  
export default function onBoardingSvgComponent(){  
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1510.096" height="1532.961" viewBox="0 0 1510.096 1532.961">
  <defs>
    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#74bbfa"/>
      <stop offset="1" stop-color="#4077f2"/>
    </linearGradient>
  </defs>
  <g id="Group_20" data-name="Group 20" transform="translate(68.006 875.66)">
    <path id="Path_5" data-name="Path 5" d="M-160.438,1004.283c48.679-31.327,178.475-104.792,308.46-84.017s201.6,78.281,300.724,28.473,212-143.6,251.985-261.642S850.442-145.2,850.442-145.2L21.515,151.042S-209.117,1035.61-160.438,1004.283Z" transform="translate(682.538 -658.31) rotate(38)" fill="url(#linear-gradient)"/>
    <path id="Path_4" data-name="Path 4" d="M-155.267,836.926C-95.9,765.05-42.931,695.313,105.209,642.989s206.368-15.846,272.986-29.05,178.213-47.644,281.17-217.153S801.476-158.472,801.476-158.472L60.425-11.948S-214.634,908.8-155.267,836.926Z" transform="translate(633.735 -580.886) rotate(38)" fill="#fff" opacity="0.138"/>
    <path id="Path_2" data-name="Path 2" d="M20.877,472.726C67.849,384.46,122.31,320.687,167.646,301s111.465-65.457,123.43-116.914S308.228,47.859,279.111,18.574,20.877,3.4,20.877,3.4-26.1,560.991,20.877,472.726Z" transform="translate(274.729 -341.743) rotate(38)" fill="#fff" opacity="0.138"/>
    <g id="dots" transform="translate(192 61.25)">
      <circle id="Oval" cx="8" cy="8" r="8" transform="translate(243 8)" fill="#fff"/>
      <circle id="Oval_Copy" data-name="Oval Copy" cx="6.5" cy="6.5" r="6.5" transform="translate(192 126.5)" fill="#fff"/>
      <circle id="Oval_Copy_2" data-name="Oval Copy 2" cx="12" cy="12" r="12" transform="translate(287 221.5)" fill="#fff"/>
      <circle id="Oval_Copy_4" data-name="Oval Copy 4" cx="4" cy="4" r="4" transform="translate(6)" fill="#fff"/>
    </g>
  </g>
</svg>

`;
  const SvgImage = () => <SvgXml xml={svgMarkup} />;  
  
  return <SvgImage />;
  }