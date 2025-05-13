
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  withText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  textColor?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  className, 
  withText = true, 
  size = 'md',
  textColor = 'text-digicertify-primary dark:text-white'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className={cn('relative', sizeClasses[size])}>
        <div className="absolute inset-0 bg-digicertify-primary rounded-lg rotate-45 transform -translate-y-1 translate-x-1"></div>
        <div className="absolute inset-0 bg-digicertify-secondary rounded-lg -rotate-45"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
          D
        </div>
      </div>
      
      {withText && (
        <span className={cn('font-display font-bold', textSizeClasses[size], textColor)}>
          DigiCertify
        </span>
      )}
    </div>
  );
};

export default Logo;
