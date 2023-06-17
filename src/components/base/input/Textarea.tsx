import classNames from "classnames/dedupe";
import React, { ForwardedRef, forwardRef } from "react";
import TextareaAutosize, { TextareaAutosizeProps } from "react-textarea-autosize";

export interface ITextareaClassNames {
  root: string;
  label: string;
  textareaRoot: string;
  textarea: string;
  helpText: string;
}
interface IProps {
  name: string;
  label?: string;
  helpText?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  className?: string;
  classes?: Partial<ITextareaClassNames>;

  invalid?: boolean;
  disabled?: boolean;
}

export type TTextareaProps = IProps & TextareaAutosizeProps;
function _Textarea(props: TTextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) {
  const { name, label, helpText, startAdornment, endAdornment, classes, className, invalid, ...otherProps } = props;
  const id_or_name = props.id || name;

  return (
    <div className={classNames(className, classes?.root)}>
      {label && (
        <label
          htmlFor={id_or_name}
          className={classNames(classes?.label, "inline-block text-sm font-bold text-start capitalize mb-1.5")}
        >
          {label}
        </label>
      )}
      <div
        className={classNames(
          classes?.textareaRoot,
          "group w-full rounded-sm flex items-center border  overflow-hidden",
          invalid ? "border-red-500" : "border-onLight dark:border-onDark",
          {
            "cursor-not-allowed opacity-30": otherProps.disabled,
          }
        )}
      >
        <TextareaAutosize
          ref={ref}
          {...otherProps}
          name={name}
          id={id_or_name}
          className={classNames(
            classes?.root,
            "peer bg-transparent disabled:pointer-events-none py-3.5 flex-grow h-full text-sm font-medium placeholder-current outline-none",
            startAdornment ? "pl-1.5" : "pl-4",
            endAdornment ? "pr-1.5" : "pr-4"
          )}
          aria-invalid={invalid}
          aria-describedby={helpText ? `${id_or_name}-help-text` : undefined}
        />
        {startAdornment}
        {endAdornment}
      </div>
      {helpText && (
        <p
          id={`${id_or_name}-help-text`}
          className={classNames(classes?.helpText, "inline-block text-xs text-start capitalize mt-1.5", {
            "text-red-500": invalid,
          })}
        >
          {helpText}
        </p>
      )}
    </div>
  );
}

export const Textarea = forwardRef(_Textarea);
export default Textarea;
