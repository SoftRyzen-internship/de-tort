import React from "react";

import { AboutCard } from "@/components/ui/AboutCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

import data from "@/data/common.json";

import HeartIcon from "~/icons/heart.svg";
import StarIcon from "~/icons/star.svg";
import GiftIcon from "~/icons/gift.svg";
import DropIcon from "~/icons/drop.svg";
import LightningIcon from "~/icons/lightning.svg";

const BG_FEATURES_EVEN = "#FFF4CB";
const BG_FEATURES_ODD = "#F5D9E2";

export const About: React.FC = () => {
  const { values, features, title, description } = data.about;
  const icons = [HeartIcon, StarIcon, GiftIcon, DropIcon, LightningIcon];

  return (
    <section className="section">
      <div className="container">
        <SectionTitle text={title} />
        <p className="mb-6 font-fixel">{description}</p>
        <ul className="mb-10 flex flex-col gap-6">
          {values.map((value, index) => (
            <li key={index} className="">
              <h3 className="font-unbounded mb-3 font-semibold">
                {value.title}
              </h3>
              <p className="font-fixel">{value.text}</p>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-4">
          {features.map((text, index) => {
            const IconComponent = icons[index];
            const color = index % 2 === 0 ? BG_FEATURES_EVEN : BG_FEATURES_ODD;
            return (
              <AboutCard
                key={index}
                icon={<IconComponent />}
                text={text}
                color={color}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
