"use client";
import { useState } from "react";
import PersonalInfo from "../components/PersonalInfo/PersonalInfo";
import VacationInfo from "../components/VacationInfo/VacationInfo";
import { useUser } from "../context/UserContext";
import Image from "next/image";
import EmployeeLoad from "../components/EmployeeLoad/EmployeeLoad";
import Header from "@/components/Header";

export default function Home() {
  const [activeTab, setActiveTab] = useState("personalInfo");
  const { user } = useUser();


  return (
    <div className="container mx-auto min-h-screen pb-20 text-primary-text font-sans">
      <Header />
      <button className="flex justify-center items-center my-4 px-4 py-[10px]">
        <Image
          className="mr-4"
          src="/chevron-left.svg"
          alt="burger"
          width={24}
          height={24}
        />
        <p className="text-button font-semiBold text-tertiary-text uppercase">
          Вернуться к сотрудникам
        </p>
      </button>
      <main>
        <div className="px-10 pt-10 pb-10 mb-5 rounded-xl bg-secondary-bg  max-sm:px-4 max-sd:mb-4 max-sm:pt-8 max-sm:pb-8" >
          <div className="flex flex-wrap max-md:justify-center max-md:items-center">
            <Image
              src={user.avatar}
              width={160}
              height={160}
              alt="avatar"
              className="w-40 h-40 rounded-full mr-4"
            />
            <div className="py-6 px-12 max-md:py-0 max-md:px-0 max-md:pt-4">
              <h3 className="text-h3 font-bold max-md:text-h5 max-md:text-center">
                {user.firstName}
                <br />
                {user.lastName} {user.middleName}
              </h3>
              <div className="mt-8 flex flex-col max-md:text-center">
                <p className="mb-4 text-body1 font-regular">{user.position}</p>
                <p className="text-body1 font-regular">{user.location}</p>
              </div>
            </div>
          </div>
          <div className="max-w-fit mt-6 flex flex-nowrap border-b border-primary-border max-md:justify-center">
            <button
              onClick={() => setActiveTab("personalInfo")}
              className={`px-4 py-[10px] text-body2 font-semibold uppercase ${
                activeTab === "personalInfo"
                  ? "text-primary-text border-b-2 border-accent-border"
                  : "text-secondary-text"
              }`}
            >
              Основная информация
            </button>
            <button
              onClick={() => setActiveTab("vacationInfo")}
              className={`px-4 py-[10px] text-body2 font-semibold uppercase ${
                activeTab === "vacationInfo"
                  ? "text-primary-text border-b-2 border-accent-border"
                  : "text-secondary-text"
              }`}
            >
              Отпуск
            </button>
          </div>
        </div>
        {activeTab === "personalInfo" ? (
          <div className="flex justify-between max-lg:flex-wrap">
            <PersonalInfo />
            <EmployeeLoad />
          </div>
        ) : (
          <VacationInfo />
        )}
      </main>
    </div>
  );
}
