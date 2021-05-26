import React from "react";
import { SvgXml } from "react-native-svg";  
export default function sendIcon(){  
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path id="FontAwsome_times-circle_" data-name="FontAwsome (times-circle)" d="M20,8A12,12,0,1,0,32,20,12,12,0,0,0,20,8Zm0,21.677A9.677,9.677,0,1,1,29.677,20,9.675,9.675,0,0,1,20,29.677ZM24.926,16.99,21.916,20l3.01,3.01a.581.581,0,0,1,0,.823l-1.094,1.094a.581.581,0,0,1-.823,0L20,21.916l-3.01,3.01a.581.581,0,0,1-.823,0l-1.094-1.094a.581.581,0,0,1,0-.823L18.084,20l-3.01-3.01a.581.581,0,0,1,0-.823l1.094-1.094a.581.581,0,0,1,.823,0L20,18.084l3.01-3.01a.581.581,0,0,1,.823,0l1.094,1.094a.581.581,0,0,1,0,.823Z" transform="translate(-8 -8)" fill="#e53e54"/>
</svg>



`;
const SvgImage = () => <SvgXml xml={svgMarkup} width="90px" />;  

return <SvgImage />;
}
