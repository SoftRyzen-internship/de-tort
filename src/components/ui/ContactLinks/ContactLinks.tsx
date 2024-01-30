import { FC } from "react";

import { TContacts } from "@/components/ui/ContactLinks/types";

import { cn } from "@/utils/helpers/cn";

import data from "@/data/contacts.json";

export const ContactLinks: FC<TContacts> = ({ className }) => {
  return (
    <div>
      <ul className={cn("inline-flex gap-10 flex-col", className)}>
        <li>
          <a
            className=" text-color-text-secondary text-[20px] leading-6 font-semibold font-fixel items-center flex-shrink-0"
            href={`tel:${data.phone}`}
          >
            <div className="text-color-accent-primary flex gap-2">icon</div>
            {data.phone}
          </a>
        </li>

        <li className="flex">
          <a
            className=" text-color-text-secondary text-[20px] leading-6 font-semibold font-fixel items-center flex-shrink-0"
            href={`mailto:${data.instagramLink}`}
          >
            <div className="text-color-accent-primary flex gap-2">icon</div>
            {data.instagramUser}
          </a>
        </li>
      </ul>
    </div>
  );
};
/*
color: #383838;

text-align: right;
font-family: "Fixel Display";
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 120%; /* 24px 
*/
