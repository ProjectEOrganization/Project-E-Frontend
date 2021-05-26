import React from "react";
import { SvgXml } from "react-native-svg";  
export default function sendIcon(){  
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path id="FontAwsome_plus-square_" data-name="FontAwsome (plus-square)" d="M18.857,43.143v1.714a.645.645,0,0,1-.643.643H13.5v4.714a.645.645,0,0,1-.643.643H11.143a.645.645,0,0,1-.643-.643V45.5H5.786a.645.645,0,0,1-.643-.643V43.143a.645.645,0,0,1,.643-.643H10.5V37.786a.645.645,0,0,1,.643-.643h1.714a.645.645,0,0,1,.643.643V42.5h4.714A.645.645,0,0,1,18.857,43.143ZM24,34.571V53.429A2.572,2.572,0,0,1,21.429,56H2.571A2.572,2.572,0,0,1,0,53.429V34.571A2.572,2.572,0,0,1,2.571,32H21.429A2.572,2.572,0,0,1,24,34.571ZM21.429,53.107V34.893a.322.322,0,0,0-.321-.321H2.893a.322.322,0,0,0-.321.321V53.107a.322.322,0,0,0,.321.321H21.107A.322.322,0,0,0,21.429,53.107Z" transform="translate(0 -32)" fill="#04a242"/>
</svg>




`;
const SvgImage = () => <SvgXml xml={svgMarkup} width="90px" />;  

return <SvgImage />;
}
