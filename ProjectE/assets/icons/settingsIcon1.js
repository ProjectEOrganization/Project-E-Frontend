import React from "react";
import { SvgXml } from "react-native-svg";  
export default function sendIcon(){  
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="19.282" height="21.318" viewBox="0 0 19.282 21.318">
  <g id="Icon_feather-user" data-name="Icon feather-user" transform="translate(-4.5 -3)">
    <path id="Path_27" data-name="Path 27" d="M22.282,28.606V26.571A4.071,4.071,0,0,0,18.212,22.5H10.071A4.071,4.071,0,0,0,6,26.571v2.035" transform="translate(0 -5.788)" fill="none" stroke="#427af2" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    <path id="Path_28" data-name="Path 28" d="M20.141,8.571A4.071,4.071,0,1,1,16.071,4.5a4.071,4.071,0,0,1,4.071,4.071Z" transform="translate(-1.929)" fill="none" stroke="#427af2" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
  </g>
</svg>

`;
const SvgImage = () => <SvgXml xml={svgMarkup} width="90px" />;  

return <SvgImage />;
}
