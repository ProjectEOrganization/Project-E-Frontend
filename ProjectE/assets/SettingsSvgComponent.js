import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SettingsSvgComponent(){  
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="623.945" height="483.67" viewBox="0 0 623.945 483.67">
  <defs>
    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#74bbfa"/>
      <stop offset="1" stop-color="#4077f2"/>
    </linearGradient>
  </defs>
  <path id="Path_5" data-name="Path 5" d="M11.854,457c32.525-10.767,120.554-34.768,220.966-14.667s161.719,52.723,229.763,37.339S603.3,429.432,618.023,377.4,622.454,0,622.454,0L37.8,72.378S-20.671,467.77,11.854,457Z" transform="translate(-2.007)" fill="url(#linear-gradient)"/>
  <path id="Path_4" data-name="Path 4" d="M11.179,401.491c32.992-29.948,61.6-59.46,162.623-70.93S322.92,342.99,369.867,342.974,493.644,336.8,544.26,262.519,566.853,0,566.853,0H44.569S-21.813,431.439,11.179,401.491Z" transform="translate(48.152 58.969)" fill="#fff" opacity="0.138"/>
  <path id="Path_3" data-name="Path 3" d="M1.955,392.9C9.918,366.231,42.491,307.637,103.472,279S222.34,239.23,310.03,234.121s162.079-19.692,203.588-85.458S525.731,10.193,525.731,10.193L150.267,0,19.23,35.408S-6.007,419.562,1.955,392.9Z" transform="translate(85.884 41.186)" fill="#fff" opacity="0.138"/>
</svg>


`;
  const SvgImage = () => <SvgXml xml={svgMarkup} />;  
  
  return <SvgImage />;
  }