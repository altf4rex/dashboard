'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

interface TeamMember {
  name: string;
  position: string;
  avatar: string;
}

interface User {
  name: string;
  firstName: string;
  lastName: string;
  middleName: string;
  avatar: string;
  position: string;
  location: string;
  birthDate: string;
  employmentDate: string;
  country: string;
  city: string;
  email: string;
  project: string;
  projectType: string;
  responsible: string;
  team: TeamMember[];
  startDate: string;
  endDate: string;
}

interface UserContextProps {
  user: User;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user] = useState<User>({
    name: 'Иванов Иван Иванович',
    firstName: 'Иванов',
    lastName: 'Иван',
    middleName: 'Иванович',
    avatar: '/avatar.png',
    position: 'Junior UI/UX designer',
    location: 'Россия, Красноярск',
    birthDate: '06.01.2014',
    employmentDate: '15.05.2020',
    country: 'Россия',
    city: 'Красноярск',
    email: 'test@gmail.com',
    project: 'MedPoint 24',
    projectType: 'Коммерческий',
    responsible: 'Анна Кузнецова',
    team: [
      { name: 'John Smith', position: 'Junior UI/UX designer', avatar: '/avatar1.png' },
      { name: 'Sarah Brown', position: 'Middle Product Design TeamLead', avatar: '/avatar2.png' },
      { name: 'David Taylor', position: 'Middle Android Developer', avatar: '/avatar3.png' },
      { name: 'Ann Williams', position: 'Middle Head of Service', avatar: '/avatar4.png' },
      { name: 'James Miller', position: 'CEO', avatar: '/avatar5.png' },
      { name: 'Henry Jones', position: 'Middle QA', avatar: '/avatar6.png' },
      { name: 'Charles Williams', position: 'Junior Employee Support Manager', avatar: '/avatar7.png' },
      { name: 'Jane Miller', position: 'Middle Sales Manager', avatar: '/avatar8.png' },
      { name: 'Sam Clark', position: 'QA Lead', avatar: '/avatar9.png' },
    ],
    startDate: '03 марта 2023',
    endDate: '23 марта 2023',
  });

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser(): UserContextProps {
  return useContext(UserContext)!;
}
