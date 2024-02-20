import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactLinks } from "@/components/ui/ContactLinks";
import { Schedule } from "@/components/ui/Schedule";
import { MapLink } from "@/components/ui/MapLink";

import { fetchContacts } from "@/requests";

import IconPin from "~/icons/pin.svg";

import data from "@/data/section-contacts.json";

import { ContactsProps } from "./types";

export const Contacts: React.FC<ContactsProps> = async ({
  variant = "home",
}) => {
  const contacts = await fetchContacts();

  const {
    heading,
    contacts: { subtitle },
    address: { city, location },
  } = data;

  const sectionBgColor =
    variant === "home" ? "bg-color-bg-primary" : "bg-color-bg-accent";
  const mapStyles =
    variant === "home"
      ? "shadow-3xl-map-a border-color-border-map-a"
      : "shadow-3xl-map-b border-color-border-map-b";

  return (
    <section
      className={`py-[60px] md:py-20 xl:pt-[120px] xl:pb-[175px] text-color-text-primary leading-[1.4] ${sectionBgColor}`}
    >
      <div className="container flex flex-col gap-6 md:gap-10 xl:flex-row xl:gap-0 xl:justify-between xl:items-center">
        <div className="flex flex-col gap-6 md:gap-10 xl:gap-[60px]">
          <SectionTitle text={heading} />

          <div className="flex smOnly:justify-between gap-[34px] md:gap-20 xl:flex-col xl:gap-10">
            <div className="flex flex-col gap-6 md:gap-8 xl:gap-10">
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2 font-unbounded font-semibold text-[16px] md:text-[20px] xl:text-[24px]">
                  <IconPin className="w-5 h-5 md:w-6 md:h-6" /> {city}
                </p>

                <p className="max-w-[172px] md:max-w-[288px] xl:max-w-[236px] font-fixel text-[16px] md:text-[20px]">
                  {location}
                </p>
              </div>

              <div className="flex flex-col items-start gap-2">
                <p className="smOnly:max-w-[172px] mdOnly:max-w-[212px] font-unbounded font-semibold text-[16px] md:text-[20px] xl:text-[24px]">
                  {subtitle}
                </p>

                <ContactLinks data={contacts} variant="phone" />
              </div>
            </div>

            <Schedule />
          </div>
        </div>

        <MapLink className={`self-center ${mapStyles}`} />
      </div>
    </section>
  );
};
