import cx from "classnames/dedupe";
import React, { ForwardedRef, forwardRef, RefAttributes } from "react";
import StateManagedSelect, { ClassNamesConfig } from "react-select";
import ReactSelect from "react-select/dist/declarations/src/Select";
import { GroupBase } from "react-select/dist/declarations/src/types";
import { StateManagerProps } from "react-select/dist/declarations/src/useStateManager";

export type TSelectProps<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = Omit<StateManagerProps<Option, IsMulti, Group>, "classNames"> & {
  classes?: ClassNamesConfig<Option, IsMulti, Group>;
  fullWidth?: boolean;
  label?: string;
  helpText?: string;

  invalid?: boolean;
  disabled?: boolean;
};
function _Select<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  { classes, name, label, helpText, invalid, disabled, fullWidth, ...otherProps }: TSelectProps<Option, IsMulti, Group>,
  ref: ForwardedRef<ReactSelect<Option, IsMulti, Group>>
) {
  const id_or_name = otherProps.id || name;

  const defaultClassNames: ClassNamesConfig<Option, IsMulti, Group> = {
    clearIndicator: () => cx("!px-2 !text-onLight dark:!text-onDark"),
    dropdownIndicator: () => cx("!px-2 !text-onLight dark:!text-onDark"),
    container: () => cx("!w-full !min-h-12", { "!max-w-sm": !fullWidth }),
    control: (selectInnerProps) =>
      cx(
        "!py-1.5 !w-full !h-full !bg-transparent !rounded-sm !border !border-onLight dark:!border-onDark !shadow-none",
        {
          "!cursor-not-allowed !opacity-30": selectInnerProps.isDisabled,
        }
      ),
    indicatorSeparator: () => cx("!bg-onLight dark:!bg-onDark"),
    input: () => cx("!m-0 !p-0 !text-sm !font-medium !text-onLight dark:!text-onDark"),
    menu: () =>
      cx(
        "!rounded-xs !bg-light dark:!bg-dark !border !border-onLight dark:!border-onDark !shadow !shadow-onLight dark:!shadow-onDark"
      ),
    menuList: () => cx("!py-2"),
    option: (selectInnerProps) =>
      cx("text-xs font-medium lg:!text-sm !py-2.5 !px-3 lg:!px-5", {
        "!bg-transparent !text-onLight dark:!text-onDark":
          !selectInnerProps.isSelected && !selectInnerProps.isFocused && !selectInnerProps.isDisabled,
        "!bg-dark/10 !text-dark dark:!bg-white/25 dark:!text-white !cursor-pointer":
          selectInnerProps.isFocused && !selectInnerProps.isSelected && !selectInnerProps.isDisabled,
        "!bg-dark/90 !text-white dark:!bg-white/90 dark:!text-dark !cursor-default":
          selectInnerProps.isSelected && !selectInnerProps.isDisabled,
        "!text-onLight-soft dark:!text-onDark-soft !cursor-not-allowed": selectInnerProps.isDisabled,
        "!bg-primary-light dark:!bg-white/25": selectInnerProps.isDisabled && selectInnerProps.isFocused,
      }),
    placeholder: () => cx("!text-sm !font-medium !text-onLight dark:!text-onDark !m-0"),
    singleValue: () => cx("!text-sm !font-medium !text-onLight dark:!text-onDark"),
    valueContainer: () => cx("!px-3.5"),
  };

  return (
    <div>
      {label && (
        <label htmlFor={id_or_name} className="inline-block text-sm font-bold text-start capitalize mb-1.5">
          {label}
        </label>
      )}
      <StateManagedSelect id={id_or_name} ref={ref} classNames={{ ...defaultClassNames, ...classes }} {...otherProps} />
      {helpText && (
        <p
          id={`${id_or_name}-help-text`}
          className={cx("inline-block text-xs text-start capitalize mt-1.5", {
            "text-red-500": invalid,
          })}
        >
          {helpText}
        </p>
      )}
    </div>
  );
}

export const Select = forwardRef(_Select) as <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: TSelectProps<Option, IsMulti, Group> & RefAttributes<ReactSelect<Option, IsMulti, Group>>
) => React.ReactElement;

export default Select;
