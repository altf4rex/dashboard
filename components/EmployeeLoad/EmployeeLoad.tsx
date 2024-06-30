import { useState } from "react";
import { useUser } from "../../context/UserContext";
import Modal from "../Modal/Modal";
import Image from "next/image";

export default function EmployeeLoad() {
  const { user } = useUser();
  const [isModalOpen, setModalOpen] = useState(false);

  const teamToShow = user.team.slice(0, 7);
  const remainingTeamCount = user.team.length - teamToShow.length;

  return (
    <div className="max-w-[658px] h-fit p-[30px] rounded-xl bg-secondary-bg max-md:mt-4 max-sm:px-4">
      <div className="mb-10 flex justify-between items-center">
        <h5 className="text-h5 font-regular text-primary-text">
          Загрузка сотрудника
        </h5>
        <div className="text-body2 font-semibold text-[#D77556]">100%</div>
      </div>
      <div className="flex flex-col gap-y-10 max-md:gap-y-4">
        <div className="flex max-md:flex-wrap">
          <div className="mr-[124px]">
            <p className="mb-2 text-body1 text-tertiary-text font-regular">
              Название проекта
            </p>
            <p className="text-body1 text-primary-text font-regular">
              {user.project}
            </p>
          </div>
          <div className="max-md:mt-4">
            <p className="mb-2 text-body1 text-tertiary-text font-regular">
              Тип проекта
            </p>
            <p className="text-body1 text-primary-text font-regular">
              {user.projectType}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="mr-[78px] max-sm:mr-0">
            <p className="mb-2 text-body1 text-tertiary-text font-regular">
              Ответственный
            </p>
            <div className="flex items-center">
              <Image
                width={48}
                height={48}
                src={teamToShow[3].avatar}
                alt={user.responsible}
                className="w-12 h-12 rounded-full mr-2"
              />
              <p className="text-body1 text-primary-text font-regular">
                {user.responsible}
              </p>
            </div>
          </div>
          <div className="mr-[44px] max-md:mt-4 max-sm:mr-0">
            <p className="mb-2 text-body1 text-tertiary-text font-regular">
              Команда
            </p>
            <div className="flex items-center">
              {teamToShow.map((member, index) => (
                <Image
                  width={48}
                  height={48}
                  key={index}
                  src={member.avatar}
                  alt={member.name}
                  className="w-12 h-12 border border-secondary-bg rounded-full -mr-3"
                />
              ))}
              {remainingTeamCount > 0 && (
                <button
                  onClick={() => setModalOpen(true)}
                  className="ml-5 text-body1 font-regular text-primary-text"
                >
                  +{remainingTeamCount}
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2">
          <p className="mb-2 text-body1 text-tertiary-text font-regular">
            Сроки работы
          </p>
          <div className="flex text-body1 text-secondary-text font-regular">
            {user.startDate}
            <Image
              className="mx-2"
              src="/arrow-right.svg"
              alt="arrow"
              width={24}
              height={24}
            />
            {user.endDate}
          </div>
        </div>
      </div>
      <div className="mt-10 text-center">
        <button className="w-full py-[10px] uppercase text-primary-text text-body2 font-semibold bg-accent-bg rounded-[4px]">
          Посмотреть всю загрузку
        </button>
      </div>
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <ul className="mt-10">
            {user.team.map((member, index) => (
              <li key={index} className="flex items-center mb-4">
                <Image
                  width={48}
                  height={48}
                  src={member.avatar}
                  alt={member.name}
                  className="w-12 h-12 rounded-full mr-2"
                />
                <div>
                  <p className="text-body1 font-regular text-primary-text">
                    {member.name}
                  </p>
                  <p className="text-body2 font-regular text-secondary-text">
                    {member.position}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </div>
  );
}
