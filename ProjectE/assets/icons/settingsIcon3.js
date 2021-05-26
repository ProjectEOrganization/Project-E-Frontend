import React from "react";
import { SvgXml } from "react-native-svg";  
export default function sendIcon(){  
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path id="FontAwsome_flag_" data-name="FontAwsome (flag)" d="M15.758,3.75c-2.3,0-4.374-1.5-7.59-1.5a10.4,10.4,0,0,0-3.784.711A2.25,2.25,0,1,0,1.125,4.2V23.25a.75.75,0,0,0,.75.75h.75a.75.75,0,0,0,.75-.75V19.339A12.9,12.9,0,0,1,9.367,18c2.3,0,4.374,1.5,7.59,1.5a10.89,10.89,0,0,0,6.026-1.874A2.248,2.248,0,0,0,24,15.743V4.5a2.249,2.249,0,0,0-3.136-2.068A13.407,13.407,0,0,1,15.758,3.75Zm5.992,12a8.817,8.817,0,0,1-4.793,1.5c-2.81,0-4.781-1.5-7.59-1.5a16.078,16.078,0,0,0-5.992,1.125V6A8.817,8.817,0,0,1,8.168,4.5c2.81,0,4.781,1.5,7.59,1.5A16.028,16.028,0,0,0,21.75,4.5Z" transform="translate(0 0)" fill="#427af2"/>
</svg>

`;
const SvgImage = () => <SvgXml xml={svgMarkup} width="90px" />;  

return <SvgImage />;
}
