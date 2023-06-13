import classNames from "classnames/dedupe";
import React, { ForwardedRef, forwardRef } from "react";

type DEFAULT_ELEMENT_TYPE = "button";

export interface IBaseButtonClassNames {
  root: string;
}
interface IProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> {
  elementType?: T | React.JSXElementConstructor<any>;
  classes?: Partial<IBaseButtonClassNames>;
  className?: string;
  children?: React.ReactNode;
}

export type TBaseButtonProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> = IProps<T> &
  React.ComponentPropsWithoutRef<T>;

function _BaseButton<T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(props: IProps<T>, ref: ForwardedRef<T>) {
  const { elementType: ElementType = "button", classes, className, children, ...otherProps } = props;

  return (
    // @ts-expect-error
    <ElementType
      ref={ref}
      className={classNames(
        className,
        classes?.root,
        "rounded-sm border hover:shadow active:shadow-none shadow-onLight dark:shadow-onDark outline-none"
      )}
      {...otherProps}
    >
      {children}
    </ElementType>
  );
}

export const BaseButton = forwardRef(_BaseButton) as <T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(
  props: TBaseButtonProps<T> & { ref?: ForwardedRef<T> }
) => React.ReactElement;

export default BaseButton;
