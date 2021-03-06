import React from "react";
import { SvgXml } from "react-native-svg";  
export default function sendIcon(){  
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="17.674" height="17.673" viewBox="0 0 17.674 17.673">
  <path id="FontAwsome_paper-plane_" data-name="FontAwsome (paper-plane)" d="M15.23.248.87,8.529a1.657,1.657,0,0,0,.2,2.965l3.945,1.633V16.04A1.659,1.659,0,0,0,8,17.027l1.512-2.04,3.863,1.595A1.66,1.66,0,0,0,15.647,15.3L17.7,1.936A1.66,1.66,0,0,0,15.23.248ZM6.669,16.04V13.81l1.263.521Zm7.338-.991L8.7,12.858l4.839-6.983a.553.553,0,0,0-.818-.732L5.42,11.5,1.7,9.965,16.058,1.681Z" transform="translate(-0.043 -0.025)" fill="#fff"/>
</svg>
`;
const SvgImage = () => <SvgXml xml={svgMarkup} width="16px" />;  

return <SvgImage />;
}
