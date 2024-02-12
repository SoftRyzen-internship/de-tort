"use client";

import React, { useState } from "react";
import { isBefore, isSameDay, format } from "date-fns";
import { uk } from "date-fns/locale";

import { cn } from "@/utils/helpers";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Shadcn/popover";
import { Calendar } from "@/components/ui/Shadcn/calendar";
import { FormControl } from "@/components/ui/Shadcn/form";

import { CalendarControlProps } from "./types";

export const CalendarControl: React.FC<CalendarControlProps> = ({
  field,
  isError,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <Popover open={isOpen} onOpenChange={(newOpen) => setIsOpen(newOpen)}>
      <PopoverTrigger asChild>
        <FormControl>
          <button
            onClick={handleOpen}
            className={cn("input-field", "h-11", {
              "text-mine": field.value,
              "text-silver": !field.value,
              "border-error": isError,
            })}
          >
            {field.value
              ? format(new Date(field.value), `dd.MM.yyyy`)
              : format(new Date(), "dd.MM.yyyy")}
          </button>
        </FormControl>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          locale={uk}
          mode="single"
          selected={field.value}
          onSelect={(date) => {
            field.onChange(date?.toString());
            handleClose();
          }}
          disabled={(date) => {
            const today = new Date();
            return isBefore(date, today) || isSameDay(date, today);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
