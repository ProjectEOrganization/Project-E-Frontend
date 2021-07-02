import React from "react";
import { SvgXml } from "react-native-svg";  
export default function sendIcon(){  
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="18.285" viewBox="0 0 16 18.285">
  <path id="Icon_awesome-bell" data-name="Icon awesome-bell" d="M8,18.285A2.285,2.285,0,0,0,10.284,16H5.715A2.285,2.285,0,0,0,8,18.285Zm7.692-5.347c-.69-.741-1.981-1.857-1.981-5.51A5.64,5.64,0,0,0,9.142,1.887V1.143a1.142,1.142,0,1,0-2.284,0v.744A5.64,5.64,0,0,0,2.289,7.428C2.289,11.082,1,12.2.307,12.939A1.116,1.116,0,0,0,0,13.714a1.144,1.144,0,0,0,1.146,1.143H14.853A1.144,1.144,0,0,0,16,13.714a1.115,1.115,0,0,0-.307-.775Z" transform="translate(0)" fill="#85acd6"/>
</svg>

`;
const SvgImage = () => <SvgXml xml={svgMarkup} width="16px" />;  

return <SvgImage />;
}
