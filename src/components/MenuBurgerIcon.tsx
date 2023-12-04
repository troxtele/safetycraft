import { useState } from "react";

type Props = {
  onClick: () => void;
};

const MenuBurgerIcon = ({ onClick }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  const handleOnClick = () => {
    onClick();
    setIsOpen(!isOpen);
  };
  return (
    <button
      className="group flex h-10 w-10 flex-col items-center justify-center rounded border-black"
      onClick={() => handleOnClick()}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "translate-y-3 rotate-45 opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>
  );
};
export default MenuBurgerIcon;
