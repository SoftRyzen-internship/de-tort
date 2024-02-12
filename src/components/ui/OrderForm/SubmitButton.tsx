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
    <button type="submit" className="submit-button" disabled={isSubmitting}>
      {isSubmitting ? labelInProgress : label}
    </button>
  );
};
