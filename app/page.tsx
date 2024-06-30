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
      <button className="flex justify-center items-center my-4 px-4 py-[10px] group">
      <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="mb-[1px] mr-2 text-tertiary-text group-hover:text-secondary-text"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289Z"
    fill="currentColor"
  />
</svg>

        <p className="text-button font-semiBold text-tertiary-text uppercase group-hover:text-secondary-text">
          Вернуться к сотрудникам
        </p>
      </button>
      <main className="max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center">
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
  className={`px-4 py-[10px] text-body2 font-semibold uppercase max-sm:px-3 border-b-2 transition-all duration-200 ${
    activeTab === "personalInfo"
      ? "text-primary-text border-accent-border"
      : "text-secondary-text border-transparent hover:text-primary-text"
  }`}
>
  Основная информация
</button>
<button
  onClick={() => setActiveTab("vacationInfo")}
  className={`px-4 py-[10px] text-body2 font-semibold uppercase max-sm:px-3 border-b-2 transition-all duration-200 ${
    activeTab === "vacationInfo"
      ? "text-primary-text border-accent-border"
      : "text-secondary-text border-transparent hover:text-primary-text"
  }`}
>
  Отпуск
</button>

          </div>
        </div>
        {activeTab === "personalInfo" ? (
          <div className="flex justify-between max-lg:flex-wrap max-lg:flex-col max-lg:justify-center max-lg:items-center">
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
