import Image from 'next/image'
import { useState, useEffect, useRef } from "react";
import { useUser } from "../context/UserContext";

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { user } = useUser();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="py-6 flex items-center justify-between max-sm:px-4">
      <Image src="/Logo.svg" alt="Logo" width={180} height={40} className='w-[180px] h-[40px] max-sm:w-[135px] max-sm:h-[30px]'/>
      <div className="flex items-center">
        <div className="relative" ref={dropdownRef}>
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
            <div 
            className="absolute right-0 mt-2 w-48 bg-secondary-bg rounded-lg shadow-lg"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              <a
                href="#"
                className="block px-4 py-2 text-primary-text hover:bg-tertiary-bg"
              >
                Профиль
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-primary-text hover:bg-tertiary-bg"
              >
                Настройки
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-primary-text hover:bg-tertiary-bg"
              >
                Выйти
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
  );
}
