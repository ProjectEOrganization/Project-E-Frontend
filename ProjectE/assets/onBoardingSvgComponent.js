import React from "react";
import { SvgXml } from "react-native-svg";  
export default function onBoardingSvgComponent(){  
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="704.03" height="793.738" viewBox="0 0 704.03 1193.738">
  <defs>
    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#74bbfa"/>
      <stop offset="1" stop-color="#4077f2"/>
    </linearGradient>
  </defs>
  <g id="Group_19" data-name="Group 19" transform="translate(128.516 440.123)">
    <path id="Path_5" data-name="Path 5" d="M13.117,1127.922c36.7-26.574,136.027-85.81,249.328-36.2S444.922,1221.849,521.7,1183.88,680.477,1059.875,697.09,931.461,702.09,0,702.09,0L42.395,178.634S-23.582,1154.5,13.117,1127.922Z" transform="translate(-130.524 -440.123)" fill="url(#linear-gradient)"/>
    <path id="Path_4" data-name="Path 4" d="M12.359,910.5c37.227-67.916,69.512-134.844,183.5-160.856s168.258,28.187,221.23,28.15S556.75,763.781,613.863,595.339,639.355,0,639.355,0H50.035S-24.867,978.414,12.359,910.5Z" transform="translate(-73.929 -306.393)" fill="#fff" opacity="0.138"/>
    <path id="Path_3" data-name="Path 3" d="M2.155,891.007c8.984-60.471,45.738-193.35,114.547-258.292s134.125-90.192,233.07-101.777,182.883-44.657,229.719-193.8S593.159,23.117,593.159,23.117L169.5,0,21.647,80.3S-6.83,951.478,2.155,891.007Z" transform="translate(-31.557 -346.721)" fill="#fff" opacity="0.138"/>
    <path id="Path_2" data-name="Path 2" d="M23.486,636.993C70.459,518.278,124.92,432.5,170.256,406.025s111.465-88.038,123.43-157.246S310.838,65.558,281.721,26.171,23.486,5.76,23.486,5.76-23.486,755.708,23.486,636.993Z" transform="translate(-49.498 -362.511)" fill="#fff" opacity="0.138"/>
    <g id="dots" transform="translate(95 42.643)">
      <circle id="Oval" cx="8" cy="8" r="8" transform="translate(0 296.357)" fill="#fff"/>
      <circle id="Oval_Copy" data-name="Oval Copy" cx="6.5" cy="6.5" r="6.5" transform="translate(177 96.165)" fill="#fff"/>
      <circle id="Oval_Copy_2" data-name="Oval Copy 2" cx="12" cy="12" r="12" transform="translate(310 97.51)" fill="#fff"/>
      <circle id="Oval_Copy_3" data-name="Oval Copy 3" cx="9.5" cy="9.5" r="9.5" transform="translate(58 17.357)" fill="#fff"/>
      <circle id="Oval_Copy_4" data-name="Oval Copy 4" cx="4" cy="4" r="4" transform="translate(33 0.357)" fill="#fff"/>
    </g>
  </g>
</svg>
`;
  const SvgImage = () => <SvgXml xml={svgMarkup} />;  
  
  return <SvgImage />;
  }