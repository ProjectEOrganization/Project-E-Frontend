import React from "react";
import { SvgXml } from "react-native-svg";
export default function sendIcon() {
  const svgMarkup = `<svg id="Icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path id="Vector" d="M0,12,6,6,0,0" transform="translate(9 6)" fill="none" stroke="#6a5ae0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
</svg>


`;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="90px" />;

  return <SvgImage />;
}
