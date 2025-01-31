import React, { useContext } from 'react';

import { ProviderContext } from '../../../context/provider';
import copyText from '../../../utils/copyText';
import shortenAddress from '../../../utils/shortenAddress';

const Profile = () => {
  const context = useContext(ProviderContext);
  const address = context?.value.user.wallet?.address || '';

  return (
    <div className="flex flex-col items-center justify-center pb-5">
      <div className="w-20 h-20 bg-[#0d5092dd] rounded-full"></div>
      <p className="text-xl font-medium mt-3 mb-1">
        Connected to {context?.value.user.wallet?.name}
      </p>
      <p
        className="text-base text-[#0d1192] cursor-pointer"
        onClick={() => {
          copyText(address);
        }}
      >
        {shortenAddress(address)}
      </p>
    </div>
  );
};

export default Profile;
