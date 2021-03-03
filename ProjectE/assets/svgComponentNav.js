import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SvgComponentNav(){  
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="171.79" height="171.79" viewBox="0 0 171.79 171.79">
  <defs>
    <linearGradient id="linear-gradient" x1="0.237" y1="0.082" x2="0.829" y2="0.861" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#4b00ff"/>
      <stop offset="1" stop-color="#4698ff"/>
    </linearGradient>
    <filter id="Bg" x="0" y="0" width="171.79" height="171.79" filterUnits="userSpaceOnUse">
      <feOffset dy="5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur"/>
      <feFlood flood-color="#60a4f8"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Add_New_Image" data-name="Add New Image" transform="translate(30 25)">
    <g transform="matrix(1, 0, 0, 1, -30, -25)" filter="url(#Bg)">
      <rect id="Bg-2" data-name="Bg" width="111.79" height="111.79" rx="55.895" transform="translate(30 25)" fill="url(#linear-gradient)"/>
    </g>
  </g>
  <path id="Icon_metro-spinner4" data-name="Icon metro-spinner4" d="M25.453,1.928A22.882,22.882,0,0,0,2.577,24.273C2.842,13.464,11.062,4.788,21.163,4.788c10.268,0,18.592,8.964,18.592,20.022a4.29,4.29,0,1,0,8.581,0A22.882,22.882,0,0,0,25.453,1.928Zm0,45.765A22.882,22.882,0,0,0,48.329,25.348c-.265,10.809-8.484,19.485-18.585,19.485-10.268,0-18.592-8.964-18.592-20.022a4.29,4.29,0,1,0-8.581,0A22.882,22.882,0,0,0,25.453,47.693Z" transform="translate(60.442 56.085)" fill="#fff"/>
</svg>
`;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="110  px"/>;  

  return <SvgImage />;
}
