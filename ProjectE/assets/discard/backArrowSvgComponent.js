import React from "react";
import { SvgXml } from "react-native-svg";  
export default function backArrowSvgComponent(){  
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="10.094" height="15.632" viewBox="0 0 300.094 15.632">
  <path id="FontAwsome_angle-left_" data-name="FontAwsome (angle-left)" d="M25.006,102.936l6.642-6.642a1.167,1.167,0,0,1,1.656,0l1.1,1.1a1.167,1.167,0,0,1,0,1.656l-4.7,4.713,4.708,4.708a1.167,1.167,0,0,1,0,1.656l-1.1,1.109a1.167,1.167,0,0,1-1.656,0L25.011,104.6a1.169,1.169,0,0,1,0-1.66Z" transform="translate(-24.662 -95.95)" fill="#a0a7ba"/>
</svg>`;
const SvgImage = () => <SvgXml xml={svgMarkup} width="301px" />;  

return <SvgImage />;
}
