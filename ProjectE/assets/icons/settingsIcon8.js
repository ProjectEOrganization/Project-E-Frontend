import React from "react";
import { SvgXml } from "react-native-svg";  
export default function sendIcon(){  
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="27.5" height="27.5" viewBox="0 0 27.5 27.5">
  <g id="Icon_ionic-md-information-circle-outline" data-name="Icon ionic-md-information-circle-outline" transform="translate(-3.375 -3.375)">
    <path id="Path_35" data-name="Path 35" d="M17.125,6.151A10.969,10.969,0,1,1,9.364,9.364a10.928,10.928,0,0,1,7.761-3.213m0-2.776a13.75,13.75,0,1,0,13.75,13.75,13.748,13.748,0,0,0-13.75-13.75Z" fill="#427af2"/>
    <path id="Path_36" data-name="Path 36" d="M19.477,25.313H16.523V16.523h2.953Zm0-11.672H16.523V10.688h2.953Z" transform="translate(-0.875 -0.875)" fill="#427af2"/>
  </g>
</svg>





`;
const SvgImage = () => <SvgXml xml={svgMarkup} width="90px" />;  

return <SvgImage />;
}
