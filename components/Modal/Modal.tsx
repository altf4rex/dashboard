import Image from "next/image";
import { ReactNode, MouseEvent } from "react";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="p-8 max-w-[650px] w-full relative rounded-xl bg-secondary-bg">
        <div className="flex justify-between items-center">
          <h4 className="text-h4 font-regular text-primary-text">
            Команда
          </h4>
          <button
            onClick={onClose}
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
