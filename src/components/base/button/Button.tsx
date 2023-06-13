import classNames from "classnames/dedupe";
import React, { ForwardedRef, forwardRef, useMemo } from "react";

import Icon, { TIConProps } from "../icon";
import BaseButton from "./BaseButton";

type DEFAULT_ELEMENT_TYPE = "button";

export interface IButtonClassNames {
  root: string;
  label: string;
  icon: string;
}
interface IProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> {
  elementType?: T | React.JSXElementConstructor<any>;
  classes?: Partial<IButtonClassNames>;
  className?: string;

  label: string;
  icon?: TIConProps["icon"];
  IconProps?: Partial<Omit<TIConProps, "icon" | "size">>;
  iconPosition?: "start" | "end";
  size?: "base" | "sm";
}

export type TButtonProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> = IProps<T> &
  React.ComponentPropsWithoutRef<T>;
function _Button<T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(props: IProps<T>, ref: ForwardedRef<T>) {
  const {
    label,
    icon,
    IconProps,
    iconPosition = "start",
    size = "base",
    elementType = "button",
    classes,
    className,
    ...otherProps
  } = props;

  const IconComponent = useMemo(
    () => (
      <Icon
        {...IconProps}
        icon={icon!}
        size={mapSize2IconSize[size]}
        className={classNames(IconProps?.className, classes?.icon, "fill-current")}
      />
    ),
    [IconProps, classes?.icon, icon, size]
  );

  return (
    // @ts-expect-error
    <BaseButton
      ref={ref}
      {...otherProps}
      elementType={elementType}
      className={classNames(
        className,
        classes?.root,
        "inline-grid grid-flow-col place-items-center place-content-center",
        "bg-light dark:bg-dark text-onLight dark:text-onDark border-onLight dark:border-onDark",
        {
          "px-5 py-4 gap-x-1.5 text-base": size === "base",
          "px-2.5 py-1.5 gap-x-0.5 text-sm": size === "sm",
        }
      )}
    >
      {iconPosition === "start" && icon && IconComponent}
      <span className={classNames(classes?.label, "text-center font-semibold uppercase underline")}>{label}</span>
      {iconPosition === "end" && icon && IconComponent}
    </BaseButton>
  );
}

const mapSize2IconSize: Record<Required<IProps>["size"], TIConProps["size"]> = {
  base: "sm",
  sm: "xs",
};

export const Button = forwardRef(_Button) as <T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(
  props: TButtonProps<T> & { ref?: ForwardedRef<T> }
) => React.ReactElement;

export default Button;
