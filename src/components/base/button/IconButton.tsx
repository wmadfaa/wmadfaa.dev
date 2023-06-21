import classNames from "classnames/dedupe";
import React, { ForwardedRef, forwardRef } from "react";

import Icon, { TIConProps } from "../icon";
import BaseButton from "./BaseButton";

type DEFAULT_ELEMENT_TYPE = "button";

export interface IIconButtonClassNames {
  root: string;
  icon: string;
}
interface IProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> {
  elementType?: T | React.JSXElementConstructor<any>;
  classes?: Partial<IIconButtonClassNames>;
  className?: string;
  icon: TIConProps["icon"];
  IconProps?: Partial<Omit<TIConProps, "icon" | "size">>;
  size?: "base" | "sm";
}

export type TIconButtonProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> = IProps<T> &
  React.ComponentPropsWithoutRef<T>;
function _IconButton<T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(props: IProps<T>, ref: ForwardedRef<T>) {
  const { icon, IconProps, size = "base", elementType = "button", classes, className, ...otherProps } = props;

  return (
    // @ts-expect-error
    <BaseButton
      ref={ref}
      {...otherProps}
      elementType={elementType}
      className={classNames(
        className,
        classes?.root,
        "inline-grid place-items-center",
        "bg-light dark:bg-dark text-onLight dark:text-onDark border-onLight dark:border-onDark",
        {
          "p-1.5": size === "base",
          "p-1": size === "sm",
        }
      )}
    >
      <Icon
        {...IconProps}
        icon={icon}
        size={mapSize2IconSize[size]}
        className={classNames(IconProps?.className, classes?.icon, "fill-current")}
      />
    </BaseButton>
  );
}

const mapSize2IconSize: Record<Required<IProps>["size"], TIConProps["size"]> = {
  base: "sm",
  sm: "xs",
};

export const IconButton = forwardRef(_IconButton) as <T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(
  props: TIconButtonProps<T> & { ref?: ForwardedRef<T> }
) => React.ReactElement;

export default IconButton;
