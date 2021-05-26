import React from "react";
import { SvgXml } from "react-native-svg";  
export default function sendIcon(){  
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="22.03" height="26.787" viewBox="0 0 22.03 26.787">
  <path id="Icon_feather-shield" data-name="Icon feather-shield" d="M15.515,26.787S25.03,22.03,25.03,14.894V6.568L15.515,3,6,6.568v8.326C6,22.03,15.515,26.787,15.515,26.787Z" transform="translate(-4.5 -1.5)" fill="none" stroke="#427af2" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
</svg>


`;
const SvgImage = () => <SvgXml xml={svgMarkup} width="90px" />;  

return <SvgImage />;
}
