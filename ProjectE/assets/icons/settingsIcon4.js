import React from "react";
import { SvgXml } from "react-native-svg";  
export default function sendIcon(){  
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24">
  <path id="FontAwsome_bookmark_" data-name="FontAwsome (bookmark)" d="M15.75,0H2.25A2.25,2.25,0,0,0,0,2.25V24l9-5.25L18,24V2.25A2.25,2.25,0,0,0,15.75,0Zm0,20.083L9,16.145,2.25,20.083V2.531a.281.281,0,0,1,.281-.281H15.469a.281.281,0,0,1,.281.281Z" fill="#427af2"/>
</svg>


`;
const SvgImage = () => <SvgXml xml={svgMarkup} width="90px" />;  

return <SvgImage />;
}
