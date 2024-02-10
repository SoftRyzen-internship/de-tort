import React from "react";

export interface ISubmitButton {
  isSubmitting: boolean;
  label: string;
  labelInProgress: string;
}

export const SubmitButton: React.FC<ISubmitButton> = ({
  isSubmitting,
  label,
  labelInProgress,
}) => {
  return (
    <button
      type="submit"
      className="absolute -bottom-8 translate-y-full left-1/2 p-4 bg-green-400"
      disabled={isSubmitting}
    >
      {isSubmitting ? labelInProgress : label}
    </button>
  );
};
