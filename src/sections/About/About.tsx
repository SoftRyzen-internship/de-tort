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
      <div className="container text-base md:text-xl text-color-text-secondary whitespace-pre-line leading-normal md:flex md:gap-[34px] xl:gap-[240px]">
        <div>
          <SectionTitle text={title} className="mb-4" />
          <p className="mb-6 font-fixel md:mb-8 xl:mb-12">{description}</p>
          <ul className="smOnly:mb-10 flex flex-col gap-6 md:gap-8 xl:gap-10 xl:max-w-[416px]">
            {values.map((value, index) => (
              <li key={index}>
                <h3 className="font-unbounded mb-3 xl:mb-4 font-semibold text-[20px] xl:text-[24px] leading-normal">
                  {value.title}
                </h3>
                <p className="font-fixel">{value.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex flex-col gap-4">
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
        </ul>
      </div>
    </section>
  );
};
