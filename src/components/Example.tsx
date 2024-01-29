import React from "react";
import LinkButton from "./ui/LinkButton";

export const Example: React.FC = () => {
  return (
    <div className="container bg-red-400">
      <h2>Example component</h2>
      <LinkButton label="Каталог тортів" href="/page" styles="mb-5" />
      <LinkButton
        label="Каталог тортів2"
        href="/page"
        styles="mb-5 hover:translate-x-[3px] hover:-translate-y-[3px]"
      />
      <LinkButton
        label="Каталог тортів3"
        href="/page"
        styles="mb-5 hover:translate-x-[7px] hover:-translate-y-[7px]"
      />
      <div className=" bg-red-100">
        <LinkButton label="міні торти" secondaryLabel="Набір" href="/" />
      </div>
    </div>
  );
};

export default Example;
