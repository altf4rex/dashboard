import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import Modal from '../Modal/Modal';

export default function EmployeeLoad() {
  const { user } = useUser();
  const [isModalOpen, setModalOpen] = useState(false);

  const teamToShow = user.team.slice(0, 7);
  const remainingTeamCount = user.team.length - teamToShow.length;

  return (
    <div className="max-w-[658px] p-[30px] rounded-xl bg-secondary-bg">
      <div className="flex justify-between items-center">
        <h4 className="text-h4 font-regular text-primary-text mb-4">Загрузка сотрудника</h4>
        <div className="text-[#D77556]">100%</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div>
          <p className="mb-2 text-body1 text-tertiary-text font-regular">Название проекта</p>
          <p className="text-body1 text-primary-text font-regular">{user.project}</p>
        </div>
        <div>
          <p className="mb-2 text-body1 text-tertiary-text font-regular">Тип проекта</p>
          <p className="text-body1 text-primary-text font-regular">{user.projectType}</p>
        </div>
        <div>
          <p className="mb-2 text-body1 text-tertiary-text font-regular">Ответственный</p>
          <div className="flex items-center">
            <img src="/path/to/image.jpg" alt={user.responsible} className="w-8 h-8 rounded-full mr-2" />
            <p className="text-body1 text-primary-text font-regular">{user.responsible}</p>
          </div>
        </div>
        <div>
          <p className="mb-2 text-body1 text-tertiary-text font-regular">Команда</p>
          <div className="flex items-center">
            {teamToShow.map((member, index) => (
              <img
                key={index}
                src={member.avatar}
                alt={member.name}
                className="w-8 h-8 rounded-full mr-2"
              />
            ))}
            {remainingTeamCount > 0 && (
              <button
                onClick={() => setModalOpen(true)}
                className="text-body1 font-regular text-primary-text"
              >
                +{remainingTeamCount}
              </button>
            )}
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2">
          <p className="mb-2 text-body1 text-tertiary-text font-regular">Сроки работы</p>
          <p className="text-body1 text-primary-text font-regular">{user.startDate} → {user.endDate}</p>
        </div>
      </div>
      <div className="mt-4 text-center">
        <button className="w-full py-[10px] uppercase text-primary-text text-body2 font-semibold bg-accent-bg rounded-[4px]">
          Посмотреть всю загрузку
        </button>
      </div>
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <h4 className="text-h4 font-regular text-primary-text mb-4">Команда</h4>
          <ul>
            {user.team.map((member, index) => (
              <li key={index} className="flex items-center mb-2">
                <img src={member.avatar} alt={member.name} className="w-8 h-8 rounded-full mr-2" />
                <div>
                  <p className="text-body1 font-regular text-primary-text">{member.name}</p>
                  <p className="text-body2 font-regular text-secondary-text">{member.position}</p>
                </div>
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </div>
  );
}
