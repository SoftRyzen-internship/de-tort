"use client";

import React, { useState } from "react";
import { cn } from "@/utils/helpers";
import { FieldValues } from "react-hook-form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { isBefore, isSameDay, format } from "date-fns";

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

  return (
    <Popover open={isOpen} onOpenChange={(newOpen) => setIsOpen(newOpen)}>
      <PopoverTrigger asChild>
        <FormControl>
          <button
            onClick={handleOpen}
            className={cn("input-field", "h-11", {
              "text-mine": field.value,
              "text-silver": !field.value,
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

export default CalendarControl;
