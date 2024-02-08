import { ToppingModalProps } from "./types";

export const ToppingsModal: React.FC<ToppingModalProps> = ({ onClose }) => {
  return (
    <div className="">
      <h2>Оберіть начинку</h2>
      <ul className="flex-center flex-col gap-[17px] ">
        <li
          className="p-15 w-[310px] h-[404px] bg-color-bg-hero"
          onClick={onClose}
        >
          a
        </li>
        <li className="p-15 w-[310px] h-[404px] bg-color-bg-hero">a</li>
        <li className="p-15 w-[310px] h-[404px] bg-color-bg-hero">a</li>
        <li className="p-15 w-[310px] h-[404px] bg-color-bg-hero">a</li>
        <li className="p-15 w-[310px] h-[404px] bg-color-bg-hero">a</li>
        <li className="p-15 w-[310px] h-[404px] bg-color-bg-hero">a</li>
        <li className="p-15 w-[310px] h-[404px] bg-color-bg-hero">a</li>
        <li className="p-15 w-[310px] h-[404px] bg-color-bg-hero">a</li>
        <li className="p-15 w-[310px] h-[404px] bg-color-bg-hero">a</li>
      </ul>
    </div>
  );
};
