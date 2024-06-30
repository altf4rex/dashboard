"use client";
import { Controller, Control } from "react-hook-form";

interface InputFieldProps {
    label: string;
    name: string;
    control: Control<any>;
    isEditing: boolean;
    colSpan?: number;
  }


const InputField = ({ label, name, control, isEditing, colSpan = 1}: InputFieldProps) => (
    <div className={`w-[368px] max-md:w-full ${colSpan === 2 ? "col-span-1 md:col-span-2 w-full" : "col-span-1"}`}>
      <label className="relative left-2 -bottom-[11px] p-1 bg-secondary-bg text-secondary-text text-caption font-regular">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="text"
            className="w-full py-2 px-[14px] text-secondary-text text-subtitle2 font-medium bg-secondary-bg border border-primary-border rounded-md"
            disabled={!isEditing}
          />
        )}
      />
    </div>
);

export default InputField;
