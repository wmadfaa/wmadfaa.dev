import React from "react";

import star_icon from "../../assets/icons/star.svg";
import star_empty from "../../assets/icons/star_empty.svg";
import star_half from "../../assets/icons/star_half.svg";
import Icon, { TIConProps } from "../base/icon";

interface IProps {
  value: number;
  size?: TIConProps["size"];
}

function Rating({ value, size }: IProps) {
  return (
    <div className="flex flex-row flex-nowrap items-center gap-x-0.5">
      {new Array(Math.floor(value)).fill(0).map((_, i) => (
        <Icon key={i} size={size} icon={star_icon} className="fill-current" />
      ))}
      {Boolean(value % 1) && <Icon size={size} icon={star_half} className="fill-current" />}
      {new Array(Math.floor(5 - value)).fill(0).map((_, i) => (
        <Icon key={i} size={size} icon={star_empty} className="fill-current" />
      ))}
    </div>
  );
}

export default Rating;
