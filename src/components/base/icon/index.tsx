import React, { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from "react";

type DEFAULT_ELEMENT_TYPE = "svg";
interface IProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> {
  /* https://marella.me/material-design-icons/demo/svg/ */
  icon: T | React.JSXElementConstructor<any>;
  size?: keyof typeof ICON_SIZES | number;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
  viewBox?: string;
}

export type TIConProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> = IProps<T> & ComponentPropsWithoutRef<T>;
export function _Icon<T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(props: TIConProps<T>, ref: ForwardedRef<T>) {
  let { icon: ICON_ELEMENT, size, style, ...otherProps } = props;
  const size2value = typeof size == "number" ? size : ICON_SIZES[size || "base"];

  return (
    <ICON_ELEMENT
      ref={ref}
      width={size2value}
      height={size2value}
      style={{ width: size2value, height: size2value, ...style }}
      viewBox="0 0 24 24"
      {...otherProps}
    />
  );
}

const ICON_SIZES = {
  xs: 16,
  sm: 18,
  base: 20,
  md: 22,
  lg: 24,
  xl: 28,
};

export const Icon = forwardRef(_Icon) as <T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(
  props: TIConProps<T> & { ref?: ForwardedRef<T> }
) => React.ReactElement;
export default Icon;
