import React from "react";
import { SvgXml } from "react-native-svg";  
export default function onBoardingSvgComponent(){  
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1499.442" height="1465.831" viewBox="0 0 1499.442 1465.831">
  <defs>
    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#74bbfa"/>
      <stop offset="1" stop-color="#4077f2"/>
    </linearGradient>
  </defs>
  <path id="Path_5" data-name="Path 5" d="M-160.882,875.888C-115.4,848.061,5.87,782.8,127.317,801.256s188.359,69.537,280.971,25.292S606.363,698.991,643.72,594.131,783.6-145.2,783.6-145.2L9.12,117.952S-206.363,903.716-160.882,875.888Z" transform="translate(819.956 219.775) rotate(42)" fill="url(#linear-gradient)"/>
  <path id="Path_4" data-name="Path 4" d="M-155.267,836.926C-95.9,765.05-42.931,695.313,105.209,642.989s206.368-15.846,272.986-29.05,178.213-47.644,281.17-217.153S801.476-158.472,801.476-158.472L60.425-11.948S-214.634,908.8-155.267,836.926Z" transform="translate(646.691 309.735) rotate(38)" fill="#fff" opacity="0.138"/>
  <g id="dots" transform="translate(581.123 898.068) rotate(20)">
    <circle id="Oval" cx="8" cy="8" r="8" transform="translate(243 8)" fill="#fff"/>
    <circle id="Oval_Copy" data-name="Oval Copy" cx="6.5" cy="6.5" r="6.5" transform="translate(192 126.5)" fill="#fff"/>
    <circle id="Oval_Copy_4" data-name="Oval Copy 4" cx="4" cy="4" r="4" transform="translate(6)" fill="#fff"/>
  </g>
</svg>


`;
  const SvgImage = () => <SvgXml xml={svgMarkup} />;  
  
  return <SvgImage />;
  }