import React from "react";

import { AboutCard } from "./ui/AboutCard";

import HeartIcon from "~/icons/heart.svg";
import StarIcon from "~/icons/star.svg";

export const Example: React.FC = () => {
  const array = [
    {
      icon: HeartIcon,
      text: "Індивідуальний підхід до кожного клієнта",
      color: "#F5D9E2",
    },
    { icon: StarIcon, text: "Індивідуальний дизайн", color: "#FFF4CB" },
  ];
  return (
    <div className="container">
      <h2>Example AboutCard component</h2>

      <div className="flex flex-col gap-5 p-5">
        {array.map((element, index) => {
          const IconComponent = element.icon;
          return (
            <AboutCard
              key={index}
              icon={<IconComponent />}
              text={element.text}
              color={element.color}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Example;
