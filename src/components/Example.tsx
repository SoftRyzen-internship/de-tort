import React from "react";
import LinkButton from "./ui/LinkButton";

export const Example: React.FC = () => {
  return (
    <div className="container bg-red-400">
      <h2>Example</h2>
      <LinkButton label="Каталог тортів" href="/single-label" styles="mb-5" />
      <div className="w-[360px] bg-red-100">
        <LinkButton
          label="Primary Label"
          secondaryLabel="Secondary Label"
          href="/dual-label"
        />
      </div>
    </div>
  );
};

export default Example;
