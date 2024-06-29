"use client";
import React, { useState } from "react";
import { useUser } from "../../context/UserContext";
import { useForm, Controller } from "react-hook-form";

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

  return (
    <div className="p-[30px] max-w-[820px] h-fit bg-secondary-bg rounded-xl ">
      <div className="flex justify-between items-center">
        <h5 className="text-h5 font-regular">Персональная информация</h5>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-accent text-button"
        >
          {isEditing ? (
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                fill="#B0B1B6"
              />
            </svg>
          ) : (
            <p className="text-subtitle2 text-tertiary-text font-medium">Изменить</p>
          )}
        </button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 mt-[18px] gap-x-6"
      >
        <div className="w-[368px] max-md:w-full">
          <label className="relative left-2 -bottom-[11px] p-1 bg-secondary-bg text-secondary-text text-caption font-regular">
            Имя
          </label>
          <Controller
            name="firstName"
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
        <div className="w-[368px] max-md:w-full">
          <label className="relative left-2 -bottom-[11px] p-1 bg-secondary-bg text-secondary-text text-caption font-regular">
            Фамилия
          </label>
          <Controller
            name="lastName"
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
        <div className="col-span-1 md:col-span-2">
          <label className="relative left-2 -bottom-[11px] p-1 bg-secondary-bg text-secondary-text text-caption font-regular">
            Отчество
          </label>
          <Controller
            name="middleName"
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
        <div className="w-[368px] max-md:w-full">
          <label className="relative left-2 -bottom-[11px] p-1 bg-secondary-bg text-secondary-text text-caption font-regular">
            Дата рождения
          </label>
          <Controller
            name="birthDate"
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
        <div className="w-[368px] max-md:w-full">
          <label className="relative left-2 -bottom-[11px] p-1 bg-secondary-bg text-secondary-text text-caption font-regular">
            Дата трудоустройства
          </label>
          <Controller
            name="employmentDate"
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
        <div className="w-[368px] max-md:w-full">
          <label className="relative left-2 -bottom-[11px] p-1 bg-secondary-bg text-secondary-text text-caption font-regular">
            Страна
          </label>
          <Controller
            name="country"
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
        <div className="w-[368px] max-md:w-full">
          <label className="relative left-2 -bottom-[11px] p-1 bg-secondary-bg text-secondary-text text-caption font-regular">
            Город
          </label>
          <Controller
            name="city"
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
        <div className="w-[368px] max-md:w-full">
          <label className="relative left-2 -bottom-[11px] p-1 bg-secondary-bg text-secondary-text text-caption font-regular">
            Должность
          </label>
          <Controller
            name="position"
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
        <div className="w-[368px] max-md:w-full">
          <label className="relative left-2 -bottom-[11px] p-1 bg-secondary-bg text-secondary-text text-caption font-regular">
            Электронная почта
          </label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="email"
                className="w-full py-2 px-[14px] text-secondary-text text-subtitle2 font-medium bg-secondary-bg border border-primary-border rounded-md"
                disabled={!isEditing}
              />
            )}
          />
        </div>
        {isEditing && (
          <div className="col-span-1 md:col-span-2 mt-8">
            <button
              type="submit"
              className="w-full py-[10px] uppercase text-primary-text text-body2 font-semibold bg-accent-bg rounded-[4px]"
            >
              Сохранить
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
