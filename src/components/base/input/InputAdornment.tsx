import classNames from "classnames/dedupe";
import React, { ForwardedRef, forwardRef } from "react";

type DEFAULT_ELEMENT_TYPE = "div";

export interface IInputAdornmentClassNames {
  root: string;
}

interface IProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> {
  position: "start" | "end";
  elementType?: T | React.JSXElementConstructor<any>;
  classes?: Partial<IInputAdornmentClassNames>;
  className?: string;
  children?: React.ReactNode;
  disableInputPeering?: boolean;
  invalid?: boolean;
}

export type TInputAdornmentProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> = IProps<T> &
  React.ComponentPropsWithoutRef<T>;
function _InputAdornment<T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(props: IProps<T>, ref: ForwardedRef<T>) {
  const {
    elementType: ElementType = "div",
    classes,
    className,
    children,
    position,
    invalid,

    ...otherProps
  } = props;

  return (
    // @ts-expect-error
    <ElementType
      ref={ref}
      className={classNames(
        className,
        classes?.root,
        "flex-shrink-0 h-full text-p2-regular text-grey dark:text-grey-light peer-enabled:group-hotive:text-dark peer-enabled:group-hotive:dark:text-white",
        {
          "pl-3 order-first": position == "start",
          "pr-3 order-last": position == "end",
          "!text-secondary-red": invalid,
        }
      )}
      {...otherProps}
    >
      {children}
    </ElementType>
  );
}

export const InputAdornment = forwardRef(_InputAdornment) as <T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(
  props: TInputAdornmentProps<T> & { ref?: ForwardedRef<T> }
) => React.ReactElement;

export default InputAdornment;
