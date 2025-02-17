import React, { useState } from 'react';

import Modal from '../../components/Modal';
import { useProvider } from '../../context/provider';
import { getInitialHeight } from '../../utils/getInitialHeight';

import { Routes } from '../../types';
import { modalContent } from './content';

interface ConnectModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function ConnectModal({ isOpen, closeModal }: ConnectModalProps) {
  const { route, setRoute } = useProvider();
  const [showAllWallets, setShowAllWallets] = useState(false);

  const shouldShowBackButton =
    route === Routes.CONNECTING || (route === Routes.ONBOARDING && showAllWallets);

  const getModalIcon = shouldShowBackButton
    ? 'back'
    : route === Routes.ONBOARDING
    ? 'info'
    : undefined;

  const handleBackNavigation = () => {
    if (route === Routes.CONNECTING) {
      setRoute(Routes.ONBOARDING);
    } else if (showAllWallets) {
      setShowAllWallets(false);
    }
  };

  const { title, Component } = modalContent[route];

  return (
    <Modal
      isOpen={isOpen}
      onBack={handleBackNavigation}
      onClose={closeModal}
      modalHeader={title}
      initialHeight={getInitialHeight(route)}
      icon={getModalIcon}
    >
      <Component showAllWallets={showAllWallets} setShowAllWallets={setShowAllWallets} />
    </Modal>
  );
}
