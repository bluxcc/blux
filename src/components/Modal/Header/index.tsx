import React from 'react';
import { ArrowLeft, Close, InfoIcon } from '../../../assets/Icons';
import { useProvider } from '../../../context/provider';

interface HeaderProps {
  icon?: 'info' | 'back';
  onInfo?: () => void;
  onBack?: () => void;
  title: string;
  closeButton?: boolean;
  onClose: () => void;
}

const ModalHeader = ({
  icon,
  onInfo,
  onBack,
  title,
  closeButton = false,
  onClose,
}: HeaderProps) => {
  const context = useProvider();
  return (
    <div className="w-full flex items-center justify-between h-16">
      {icon === 'info' ? (
        <button
          onClick={onInfo}
          className="size-6 flex justify-center items-center rounded-full transition duration-300"
        >
          <InfoIcon fill={context.value.config.appearance.textColor} />
        </button>
      ) : icon === 'back' ? (
        <button onClick={onBack} className="size-6 cursor-pointer flex justify-center items-center">
          <ArrowLeft fill={context.value.config.appearance.textColor} />
        </button>
      ) : (
        <div className="size-6" />
      )}

      <p className="text-lg font-semibold text-center flex-grow select-none">{title}</p>

      {closeButton ? (
        <button onClick={onClose} className="cursor-pointer">
          <Close fill={context.value.config.appearance.textColor} />
        </button>
      ) : (
        <div className="w-6" />
      )}
    </div>
  );
};

export default ModalHeader;
