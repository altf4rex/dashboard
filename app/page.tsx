"use client";
import { useState } from "react";
import PersonalInfo from "../components/PersonalInfo/PersonalInfo";
import VacationInfo from "../components/VacationInfo/VacationInfo";
import { useUser } from "../context/UserContext";
import Image from "next/image";
import EmployeeLoad from "../components/EmployeeLoad/EmployeeLoad";

export default function Home() {
  const [activeTab, setActiveTab] = useState("personalInfo");
  const { user } = useUser();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="container mx-auto min-h-screen  text-primary-text font-sans">
      <header className="py-6 flex items-center justify-between max-sm:px-4">
        <Image src="/Logo.svg" alt="Logo" width={180} height={40} />
        <div className="flex items-center">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="flex items-center border border-primary-border rounded-[18px] px-4 py-[6px]"
            >
              <Image
                src={user.avatar}
                width={24}
                height={24}
                alt="avatar"
                className="w-6 h-6 rounded-full"
              />
              <Image
                src="/chevron-down.svg"
                alt="arrow"
                width={24}
                height={24}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-secondary-bg rounded-lg shadow-lg">
                <a
                  href="#"
                  className="block px-4 py-2 text-primary-text hover:bg-tertiary-bg"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-primary-text hover:bg-tertiary-bg"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-primary-text hover:bg-tertiary-bg"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
          <button className="ml-2">
            <Image
              className="ml-2"
              src="/burger.svg"
              alt="burger"
              width={24}
              height={24}
            />
          </button>
        </div>
      </header>
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
      <main className="">
        <div className="px-10 pt-10 pb-10 mb-5 rounded-xl bg-secondary-bg  max-sm:px-5">
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
