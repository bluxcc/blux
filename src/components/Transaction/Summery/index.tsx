import React from 'react';

import copyText from '../../../utils/copyText';
import shortenAddress from '../../../utils/shortenAddress';
import capitalizeFirstLetter from '../../../utils/capitalizeFirstLetter';
import { useProvider } from '../../../context/provider';

interface TransactionDetail {
  label: string;
  value: string;
  isHighlighted?: boolean;
  isCopyable?: boolean;
}

interface SummaryProps {
  operationsCount: number;
  sender: string;
  estimatedFee: string;
  action: string;
}

const Summary = ({
  operationsCount,
  sender,
  estimatedFee,
  action,
}: SummaryProps) => {
  const context = useProvider();
  const appearance = context.value.config.appearance;
  const details: TransactionDetail[] = [
    { label: 'Action', value: capitalizeFirstLetter(action) },
    { label: 'Operations', value: operationsCount.toString() },
    {
      label: 'Sender',
      value: shortenAddress(sender, 5),
      isHighlighted: true,
      isCopyable: true,
    },
    { label: 'Estimated Fee', value: `${estimatedFee} XLM` },
  ];

  return (
    <div className="bluxcc-w-full bluxcc-text-sm bluxcc-text-gray-800">
      {details.map(({ label, value, isHighlighted, isCopyable }, index) => (
        <div
          key={index}
          className={`bluxcc-flex bluxcc-justify-between bluxcc-px-4 bluxcc-py-2`}
          style={{
            borderColor: appearance.borderColor,
            borderBottomStyle: 'dashed',
            borderBottomWidth: appearance.includeBorders
              ? appearance.borderWidth
              : '1px',
          }}
        >
          <span style={{ color: appearance.textColor }}>{label}</span>
          <span
            className={`${isCopyable ? 'bluxcc-cursor-pointer' : ''}`}
            style={{
              color: isHighlighted ? appearance.accent : appearance.textColor,
            }}
            onClick={() => isCopyable && copyText(sender)}
          >
            {value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Summary;
