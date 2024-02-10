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
      className="notXl:mt-2 xl:absolute xl:-bottom-8 xl:translate-y-full xl:left-1/2 submit-button"
      disabled={isSubmitting}
    >
      {isSubmitting ? labelInProgress : label}
    </button>
  );
};
