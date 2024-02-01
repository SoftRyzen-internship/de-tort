import React from "react";

import { SweetsCard } from "./ui/SweetsCard";

export const Example: React.FC = () => {
  return (
    <div className="container bg-red-100 mb-20">
      <h2>Example ReviewCard component</h2>
      <SweetsCard
        name="Печиво"
        nameColor="#A33F06"
        bgSrc="/images/pasta-@x2.jpg"
        // bgSrc="/images/cookies-@x2.jpg"
        bgAlt="Печиво з горіхами"
        targetHref="/"
      />
    </div>
  );
};

export default Example;
