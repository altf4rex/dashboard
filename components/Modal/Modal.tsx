'use client'

import Image from "next/image";
import { ReactNode, MouseEvent, useEffect, useState } from "react";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsExiting(true);
    }
  };

  const handleClose = () => {
    setIsExiting(true);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isExiting) {
      const timeout = setTimeout(() => {
        onClose();
      }, 200);

      return () => clearTimeout(timeout);
    }
  }, [isExiting, onClose]);

  return (
    <div
      onClick={handleOverlayClick}
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-overlay ${isVisible && !isExiting ? 'show' : ''}`}
    >
      <div className={`p-8 max-w-[650px] w-full relative rounded-xl bg-secondary-bg modal-content ${isVisible && !isExiting ? 'show' : ''}`}>
        <div className="flex justify-between items-center">
          <h4 className="text-h4 font-regular text-primary-text">
            Команда
          </h4>
          <button
            onClick={handleClose}
            className="text-primary-text"
          >
            <Image
              className=""
              src="/exit.svg"
              alt="exit"
              width={24}
              height={24}
            />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}