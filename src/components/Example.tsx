import React from "react";

import { LinkButton } from "./ui/LinkButton";

export const Example: React.FC = () => {
  return (
    <div className="container bg-red-100">
      <h2>Example Button component</h2>
      <LinkButton label="Каталог тортів" href="/page" className="mb-5" />

      <div className=" bg-red-100">
        <LinkButton label="міні торти" secondaryLabel="Набір" href="/" />
      </div>
    </div>
  );
};

export default Example;
