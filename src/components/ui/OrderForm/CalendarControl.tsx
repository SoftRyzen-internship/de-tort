"use client";

import React, { useState } from "react";
import { cn } from "@/utils/helpers";
import { FieldValues } from "react-hook-form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format, addDays, isBefore, isAfter } from "date-fns";
import { uk } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { FormControl } from "@/components/ui/form";

interface CalendarControlProps {
  field: FieldValues;
}

const CalendarControl: React.FC<CalendarControlProps> = ({ field }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  const selectedDate = field.value ? new Date(field.value) : new Date();
  console.log("🚀 ~ selectedDate:", field.value, selectedDate);

  return (
    <Popover open={isOpen} onOpenChange={(newOpen) => setIsOpen(newOpen)}>
      <PopoverTrigger asChild>
        <FormControl>
          <button
            onClick={handleOpen}
            className={cn("w-[240px]", !field.value && "text-gray-400")}
          >
            {field.value ? (
              field.value
            ) : (
              // format(field.value, "dd.MM.yyyy")
              <span>{format(new Date(), "dd.MM.yyyy")}</span>
            )}
          </button>
        </FormControl>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          locale={uk}
          mode="single"
          // need to set here or parsed date or if empty string - current date
          selected={field.value}
          onSelect={(date) => {
            field.onChange(JSON.stringify(date));
            handleClose();
          }}
          disabled={(date) => {
            const today = new Date();
            const twoWeeksLater = addDays(today, 14);
            return isBefore(date, today) || isAfter(date, twoWeeksLater);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default CalendarControl;
