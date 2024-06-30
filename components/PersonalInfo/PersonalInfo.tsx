"use client";
import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import Image from "next/image";

export default function PersonalInfo() {
  const { user } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: user,
  });

  const onSubmit = (data: any) => {
    console.log(data);
    setIsEditing(false);
  };

  const fields = [
    { label: "Имя", name: "firstName" },
    { label: "Фамилия", name: "lastName" },
    { label: "Отчество", name: "middleName", colSpan: 2 },
    { label: "Дата рождения", name: "birthDate" },
    { label: "Дата трудоустройства", name: "employmentDate" },
    { label: "Страна", name: "country" },
    { label: "Город", name: "city" },
    { label: "Должность", name: "position" },
    { label: "Электронная почта", name: "email" },
  ];

  return (
    <div className="p-[30px] max-w-[820px] h-fit bg-secondary-bg rounded-xl max-sm:px-4">
      <div className="flex justify-between items-center">
        <h5 className="text-h5 font-regular max-md:text-body1 max-md:font-medium">Персональная информация</h5>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-accent text-button"
        >
          {isEditing ? (
            <Image
            className=""
            src="/exit.svg"
            alt="exit"
            width={24}
            height={24}
          />
          ) : (
            <p className="text-subtitle2 text-tertiary-text font-medium hover:text-secondary-text">Изменить</p>
          )}
        </button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 mt-[18px] gap-x-6 max-md:grid-cols-1"
      >
        {fields.map((field) => (
          <InputField
            key={field.name}
            label={field.label}
            name={field.name}
            control={control}
            isEditing={isEditing}
            colSpan={field.colSpan}
          />
        ))}
        {isEditing && (
          <div className="col-span-1 md:col-span-2 mt-8">
            <button
              type="submit"
              className="w-full py-[10px] uppercase text-primary-text text-body2 font-semibold bg-accent-bg rounded-[4px] hover:bg-state-blueHover"
            >
              Сохранить
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
