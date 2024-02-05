import React from "react";

import { AboutCard } from "@/components/ui/AboutCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

import about from "@/data/about.json";

import HeartIcon from "~/icons/heart.svg";
import StarIcon from "~/icons/star.svg";
import GiftIcon from "~/icons/gift.svg";
import DropIcon from "~/icons/drop.svg";
import LightningIcon from "~/icons/lightning.svg";

export const About: React.FC = () => {
  const { values, features, title, description } = about;
  const icons = [HeartIcon, StarIcon, GiftIcon, DropIcon, LightningIcon];

  return (
    <section className="section bg-color-bg-primary">
      <div className="container text-base md:text-xl text-color-text-secondary whitespace-pre-line leading-normal md:flex md:gap-[34px] xl:gap-[240px]">
        <div>
          <SectionTitle text={title} className="mb-4" />

          <p className="mb-6 font-fixel md:mb-8 xl:mb-12">{description}</p>

          <div className="smOnly:mb-10 flex flex-col gap-6 md:gap-8 xl:gap-10 xl:max-w-[416px]">
            {values.map(({ title, text }, index) => (
              <div key={index}>
                <h3 className="font-unbounded mb-3 xl:mb-4 font-semibold text-[20px] xl:text-[24px] leading-normal">
                  {title}
                </h3>
                <p className="font-fixel">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <ul className="flex flex-col gap-4">
          {features.map((text, index) => {
            const IconComponent = icons[index];
            const isEven = index % 2 === 0;
            return (
              <AboutCard
                key={index}
                icon={<IconComponent />}
                text={text}
                isEven={isEven}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};
