import data from "@/data/section-contacts.json";

import IconClock from "~/icons/clock.svg";

export const Schedule: React.FC = () => {
  const { schedule } = data;

  return (
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
  );
};
