import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SvgComponent(){  
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="240.131" height="6.086" viewBox="0 0 240.131 6.086">
  <path id="Path_4" data-name="Path 4" d="M17.657,6.086H222.474c9.752,0,17.657-2.725,17.657-6.086H0C0,3.361,7.905,6.086,17.657,6.086Z" fill="#00dbd0"/>
</svg>`;
const SvgImage = () => <SvgXml xml={svgMarkup} width="301px" />;  

return <SvgImage />;
}

