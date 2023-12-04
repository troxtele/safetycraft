import { createElement } from "react";

type Props = {
  text: string;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  classNames?: string;
  animationDelayMs?: number;
};

export const TextRevealTW = ({ text, type, classNames, animationDelayMs = 0 }: Props) => {
  return (
    <>
      {createElement(type, {
        className: `overflow-hidden leading-6 ${classNames}`,
        children: text.match(/./gu)!.map((char, index) => (
          <span
            className="inline-block animate-text-reveal [animation-fill-mode:backwards]"
            key={`${char}-${index}`}
            style={{ animationDelay: `${index * 0.05 + animationDelayMs}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        )),
      })}
    </>
  );
};
