import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactLinks } from "@/components/ui/ContactLinks";
import { MapLink } from "@/components/ui/MapLink";

import IconPin from "~/icons/pin.svg";
import IconClock from "~/icons/clock.svg";

import data from "@/data/section-contacts.json";

export const Contacts: React.FC = () => {
  const {
    heading,
    contacts,
    schedule,
    address: { city, location },
  } = data;

  return (
    <section className="py-[60px] md:py-20 xl:pt-[120px] xl:pb-[175px] text-color-text-primary leading-[1.4] bg-color-bg-primary">
      <div className="container flex flex-col items-center gap-6 md:gap-10 xl:flex-row xl:gap-0 xl:justify-between">
        <div className="flex flex-col gap-6 md:gap-10 xl:gap-[60px]">
          <SectionTitle text={heading} />

          <div className="flex gap-[34px] md:gap-6 xl:flex-col xl:gap-10">
            <div className="flex flex-col gap-6 md:gap-8 xl:gap-10">
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2 font-unbounded font-semibold text-[16px] md:text-[20px] xl:text-[24px]">
                  <IconPin className="w-5 h-5 md:w-6 md:h-6" /> {city}
                </p>
                <p className="font-fixel text-[16px] md:text-[20px]">
                  {location}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-unbounded font-semibold text-[16px] md:text-[20px] xl:text-[24px]">
                  {contacts.subtitle}
                </p>
                <ContactLinks variant="phone" />
              </div>
            </div>

            <ul className="flex flex-col gap-4 xl:flex-row xl:gap-9 flex-shrink-0">
              {schedule.map((item, idx) => (
                <li key={idx} className="flex flex-col gap-2">
                  <p className="font-unbounded font-semibold text-[16px] md:text-[20px] xl:text-[24px]">
                    {item.day}
                  </p>
                  <p className="flex items-center gap-2 font-fixel text-[16px] md:text-[20px]">
                    <IconClock className="w-5 h-5 md:w-6 md:h-6" /> {item.time}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <MapLink />
      </div>
    </section>
  );
};
