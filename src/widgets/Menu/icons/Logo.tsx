import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 409 90" {...props}>
      <image width="409" height="90" href={isDark ? 'images/soju/LogoTextNewDark.png' : 'images/soju/LogoTextNewWhite.png'}/>
    </Svg>
  )
};

export default Logo;
