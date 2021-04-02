import React from "react";
import { SvgXml } from "react-native-svg";  
export default function HomeButtonTipSvg(){  
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="87.875" height="40.065" margin-left="40" position="absolute" left="-20" bottom="50" viewBox="0 0 87.875 30.065">
  <path id="FontAwsome_comment-alt_" data-name="FontAwsome (comment-alt)" d="M76.891,0H10.984C4.926,0,0,1.673,0,3.732V20.524c0,2.058,4.926,3.732,10.984,3.732H27.461l2.718,5.463c0,.571-.8.338.561,0l3.351-5.463h42.8c6.059,0,10.984-1.673,10.984-3.732V3.732C87.875,1.673,82.95,0,76.891,0Z" fill="rgba(0,0,0,0.75)"/>
  <text id="Skip_this_person" data-name="Skip this person" transform="translate(4.564 15.235)" fill="#fff" font-size="9" font-weight="700"><tspan x="0" y="0">Skip this person</tspan></text>
</svg>
`;
const SvgImage = () => <SvgXml xml={svgMarkup} width="101px" />;  

return <SvgImage />;
}


