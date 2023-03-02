import React, { forwardRef } from "react";
import clsx from "clsx";

interface ITextInput {
  className?: string;
  placeholderText: string;
  placeholderColor: string;
  textInputBgColor: string;
  buttonText?: string;
  buttonColor?: string;
  children?: string | JSX.Element | JSX.Element[] | (() => JSX.Element) | null;
}

export type Ref = HTMLButtonElement;

const TextInput = forwardRef<Ref, ITextInput>(
  (
    {
      className: additionalClassName = null,
      placeholderText,
      placeholderColor,
      textInputBgColor,
      buttonText = null,
      buttonColor = null,
      children = null,
      ...otherProps
    },
    ref
  ) => {
    const className = clsx(additionalClassName, textInputBgColor, placeholderColor);

    return (
      <div className="flex" {...otherProps}>
        <input type="text" placeholder={placeholderText} className={className} />
        <button
          className={clsx(
            "absolute md:relative right-11 md:right-28 text-lg text-gray-1 font-medium py-3 px-5 tracking-wider rounded-2xl transition-transform duration-200 scale-105 hover:scale-110",
            buttonColor
          )}
        >
          {buttonText}
        </button>
      </div>
    );
  }
);

export default TextInput;
