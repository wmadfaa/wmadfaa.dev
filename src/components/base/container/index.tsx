import classNames from "classnames/dedupe";
import React, { ForwardedRef, forwardRef } from "react";

type DEFAULT_ELEMENT_TYPE = "div";

export interface IContainerClassNames {
  root: string;
}

interface IProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> {
  elementType?: T | React.JSXElementConstructor<any>;
  classes?: Partial<IContainerClassNames>;
  className?: string;
  children?: React.ReactNode;
}

export type TContainerProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> = IProps<T> &
  React.ComponentPropsWithoutRef<T>;

function _Container<T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(props: IProps<T>, ref: ForwardedRef<T>) {
  const { elementType: ElementType = "div", classes, className, children, ...otherProps } = props;

  return (
    // @ts-expect-error
    <ElementType
      ref={ref}
      className={classNames(className, classes?.root, "mx-auto max-w-8xl px-8 sm:px-12 lg:px-16")}
      {...otherProps}
    >
      {children}
    </ElementType>
  );
}

export const Container = forwardRef(_Container) as <T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(
  props: TContainerProps<T> & { ref?: ForwardedRef<T> }
) => React.ReactElement;

export default Container;
