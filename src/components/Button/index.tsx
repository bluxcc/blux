import React from 'react';

import getBorderRadius from '../../utils/getBorderRadius';
import { useProvider } from '../../context/provider';
import getContrastColor from '../../utils/getContrastColor';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'outline' | 'text' | 'fill';
type ButtonState = 'enabled' | 'disabled' | 'selected';

interface ButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  state?: ButtonState;
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
}

const buttonBase =
  'bluxcc-flex bluxcc-justify-center bluxcc-items-center bluxcc-px-[10px] bluxcc-transition-all bluxcc-w-full';

const sizeClasses: Record<ButtonSize, string> = {
  small: 'bluxcc-h-8 bluxcc-text-sm bluxcc-gap-1',
  medium: 'bluxcc-h-12 bluxcc-text-sm bluxcc-gap-2',
  large: 'bluxcc-h-14 bluxcc-text-base bluxcc-gap-2',
};

const Button = ({
  size = 'large',
  variant = 'outline',
  state = 'enabled',
  children,
  startIcon,
  endIcon,
  onClick,
  style,
  className,
}: ButtonProps) => {
  const context = useProvider();
  const appearance = context.value.config.appearance;
  const borderRadius = getBorderRadius(appearance.cornerRadius);

  const baseStyle: React.CSSProperties = {
    borderRadius,
    cursor: state === 'disabled' ? 'not-allowed' : 'pointer',
    opacity: state === 'disabled' ? 0.5 : 1,
    pointerEvents: state === 'disabled' ? 'none' : undefined,
    ...style,
  };

  if (variant === 'outline') {
    Object.assign(baseStyle, {
      border: `1px solid #CDCEEE`,
      color: appearance.accent,
      backgroundColor: appearance.background,
    });
  } else if (variant === 'fill') {
    Object.assign(baseStyle, {
      backgroundColor: appearance.accent,
      fontWeight: '500',
      color: getContrastColor(appearance.accent),
    });
  } else if (variant === 'text') {
    Object.assign(baseStyle, {
      color: appearance.accent,
      backgroundColor: 'transparent',
    });
  }

  if (state === 'selected') {
    baseStyle.boxShadow = `0 0 0 2px ${appearance.accent}`;
  }

  return (
    <button
      onClick={onClick}
      disabled={state === 'disabled'}
      className={`${buttonBase} ${sizeClasses[size]} ${
        className ?? ''
      } bluxcc-transition-all bluxcc-duration-300`}
      style={baseStyle}
    >
      {startIcon && <span>{startIcon}</span>}
      <span>{children}</span>
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};

export default Button;
