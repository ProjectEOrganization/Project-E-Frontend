import React from "react";
import { SvgXml } from "react-native-svg";  
export default function sendIcon(){  
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24">
  <path id="FontAwsome_asterisk_" data-name="FontAwsome (asterisk)" d="M42.753,15.661,36.087,12l6.666-3.661a1.125,1.125,0,0,0,.433-1.549l-.913-1.582a1.125,1.125,0,0,0-1.558-.4l-6.5,3.943.163-7.6A1.125,1.125,0,0,0,33.25,0H31.424A1.125,1.125,0,0,0,30.3,1.149l.163,7.6-6.5-3.943a1.125,1.125,0,0,0-1.558.4l-.913,1.582a1.125,1.125,0,0,0,.433,1.549L28.587,12l-6.666,3.661a1.125,1.125,0,0,0-.433,1.549l.913,1.582a1.125,1.125,0,0,0,1.558.4l6.5-3.943-.163,7.6A1.125,1.125,0,0,0,31.424,24H33.25a1.125,1.125,0,0,0,1.125-1.149l-.163-7.6,6.5,3.943a1.125,1.125,0,0,0,1.558-.4l.913-1.582A1.125,1.125,0,0,0,42.753,15.661Z" transform="translate(-21.337)" fill="#427af2"/>
</svg>


`;
const SvgImage = () => <SvgXml xml={svgMarkup} width="90px" />;  

return <SvgImage />;
}
